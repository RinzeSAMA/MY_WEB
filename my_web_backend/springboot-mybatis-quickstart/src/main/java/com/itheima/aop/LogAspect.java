package com.itheima.aop;

import com.alibaba.fastjson.JSONObject;
import com.itheima.mapper.OperateLogMapper;
import com.itheima.pojo.OperateLog;
import com.itheima.utils.JwtUtils;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
/**
 *此切面用于在增删改时添加操作日志
 */

@Slf4j
@Component
@Aspect
public class LogAspect {

    @Autowired
    private OperateLogMapper operateLogMapper;

    @Autowired
    private HttpServletRequest request;

    @Around("@annotation(com.itheima.annotation.Log)")//匹配的是方法上加有Log注解的方法
    public Object recording(ProceedingJoinPoint joinPoint) throws Throwable {

        //1.获取操作人的ID - 当前登录的用户的ID
        //获取请求头中的JWT令牌，解析令牌
        String jwt = request.getHeader("token");
        Claims claims = JwtUtils.parseJWT(jwt);//claims存放的是自定义的数据，map集合
        Integer operateUser = (Integer)claims.get("id");

        //2.获取操作时间
        LocalDateTime operateTime = LocalDateTime.now();

        //3.获取操作类的类名
        String className = joinPoint.getTarget().getClass().getName();

        //4.获取操作类的方法名
        String methodName = joinPoint.getSignature().getName();

        //5.获取操作方法传入的参数
        Object[] args = joinPoint.getArgs();
        String methodParams = Arrays.toString(args);


        long begin = System.currentTimeMillis();//记录开始时间
        //6.方法执行的返回值
        //调用原始目标方法运行
        Object result = joinPoint.proceed();
        String returnValue = JSONObject.toJSONString(result);
        long end = System.currentTimeMillis();//记录结束时间

        //7.操作耗时
        Long costTime = end - begin;


        //记录操作日志
        OperateLog operateLog = new OperateLog(null,operateUser,operateTime,className,methodName,methodParams,returnValue,costTime);
        operateLogMapper.insert(operateLog);
        log.info("AOP记录操作日志：{}",operateLog);
        return result;
    }
}
