package com.itheima.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;


/**
 * AOP时间计算类，计算每个方法执行的耗时
 */
@Component//交给IOC容器管理
@Aspect //表明此类是一个AOP类，切面类。切面：描述通知与切入点的对应关系（通知+切入点）
@Slf4j
public class TimeAspect {

    @Pointcut("execution(* com.itheima.service.*.*(..))")
    public void pt(){}//切入点表达式

    @Around("pt()")//PointCut切入点，匹配连接点的条件，通知仅会在切入点方法执行时被应用
    public Object recordTime(ProceedingJoinPoint joinPoint/*JoinPoint连接点，可被AOP控制的方法*/) throws Throwable {

        //1.记录开始时间
        long begin = System.currentTimeMillis();

        //2.调用原始方法运行
        Object result = joinPoint.proceed();

        //3.记录结束时间，计算方法执行耗时
        long end = System.currentTimeMillis();
        log.info(joinPoint.getSignature() + "方法耗时为：{} ms" ,end-begin);
        return result;
        //Advice通知，指哪些重复的逻辑（如此处的计算耗时），也就是共性功能（最终体现为一个方法）
    }
}
//AOP执行流程：动态代理，最终运行的不再是原始的目标对象，二是基于目标对象生成的代理对象
