package com.itheima.utils.redis;

import cn.hutool.core.util.BooleanUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import static com.itheima.utils.redis.RedisConstants.*;


/**
 * 缓存工具类
 */
@Slf4j
@Component
public class CacheClient {

    private final StringRedisTemplate stringRedisTemplate;
    public CacheClient(StringRedisTemplate stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
    }

    //set（自动过期）
    public void setWithAutoExpire(String key, Object value, Long time, TimeUnit timeUnit) {
        stringRedisTemplate.opsForValue().set(key, JSONUtil.toJsonStr(value),time,timeUnit);
    }

    //set（逻辑过期）
    public void setWithLogicalExpire(String key, Object value,Long time, TimeUnit timeUnit) {
        //设置逻辑过期时间
        RedisData redisData = new RedisData();
        redisData.setData(value);//将值传入
        redisData.setExpireTime(LocalDateTime.now().plusSeconds(timeUnit.toSeconds(time)));//过期时间设置为当前时间 +

        //写入Redis
        stringRedisTemplate.opsForValue().set(key,JSONUtil.toJsonStr(redisData));
    }


    /**
     * 缓存穿透代码封装（使用泛型,参数为键前缀、id、泛型具体类型,函数式编程,设置键时间，时间类型，）
     * Function<ID,R> dbFallback是一个函数泛型，ID是id的类型，R是返回的value类型，这些需要用户手动传入一个函数实现
     */
    public <R,ID> R queryWithPassThrough(String keyPrefix, ID id, Class<R> type, Function<ID,R> dbFallBack,Long time, TimeUnit timeUnit) {
        String key = keyPrefix + id;
        //1.从Redis获取商铺缓存
        String Json = stringRedisTemplate.opsForValue().get(key);
        //2.判断是否存在
        if(StrUtil.isNotBlank(Json)){
            //3.存在，直接返回
            return JSONUtil.toBean(Json, type);
        }
        if(Json!=null){
            return null;
        }

        //4.不存在，根据id查询数据库
        R result = dbFallBack.apply(id);

        //5.数据库也不存在，返回错误
        if (result == null) {
            //将空值写入Redis，防止缓存穿透(2分钟TTL)
            stringRedisTemplate.opsForValue().set(key,"",CACHE_NULL_TTL,TimeUnit.MINUTES);
            return null;
        }

        //6.存在，将查到的数据转成Json写入redis
        this.setWithAutoExpire(key, result, time, timeUnit);
        //7.返回
        return result;
    }


//-------------------------------------------------------------------------------------------------------------------------------------------------------//

    /** 互斥锁，防止缓存穿透
     * 上锁
     */
    private boolean trylock(String key){
        Boolean flag = stringRedisTemplate.opsForValue().setIfAbsent(key, "1", 10, TimeUnit.SECONDS);
        return BooleanUtil.isTrue(flag);
    }

    /**
     *释放锁
     */
    private void unlock(String key){
        stringRedisTemplate.delete(key);
    }

    /**
     * 逻辑过期解决缓存击穿（使用泛型,参数为键前缀、id、泛型具体类型,函数式编程,设置键时间，时间类型，互斥锁前缀）
     */
    //缓存重建线程池
    private static final ExecutorService CACHE_REBUILD_EXECUTOR = Executors.newFixedThreadPool(10);

    public <R,ID> R queryWithLogicalExpire(String keyPrefix,ID id,Class<R> type,Function<ID,R> dbFallBack,Long time, TimeUnit timeUnit,String lockKeyPrefix) {
        String key = keyPrefix + id;
        //1.从Redis获取商铺缓存
        String Json = stringRedisTemplate.opsForValue().get(key);
        //2.判断是否存在
        if(StrUtil.isBlank(Json)){
            //3.未命中，直接返回
            return null;
        }

        //4.命中，需要先判断过期时间，把json反序列化为RedisData对象
        RedisData redisData = JSONUtil.toBean(Json, RedisData.class);
        R result = JSONUtil.toBean((JSONObject) redisData.getData(),type);
        LocalDateTime expireTime = redisData.getExpireTime();//逻辑过期时间

        //5.再判断是否过期
        if (expireTime.isAfter(LocalDateTime.now())) {
            // 5.1未过期，直接返回店铺信息
            return result;
        }
        // 5.2过期，需要缓存重建
        //6.缓存重建
        String lockKey = lockKeyPrefix + id;
        // 6.1获取互斥锁
        boolean isLock = trylock(lockKey);
        // 6.2判断是否获取互斥锁成功
        if (isLock) {
            // 6.3成功，开启独立线程，实现缓存重建
            CACHE_REBUILD_EXECUTOR.submit(()->{
                //调用对应的查询方法
                try {
                    R result1 = dbFallBack.apply(id);
                    this.setWithLogicalExpire(key,result1,time,timeUnit);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }finally {
                    //释放锁
                    unlock(lockKey);
                }
            });
        }

        // 6.4失败，直接返回过期的商品信息
        return result;
    }


}
