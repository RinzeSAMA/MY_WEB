package com.itheima.exception;


import com.itheima.pojo.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理器
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)//捕获所有异常
    public Result catchEx(Exception ex){
        ex.printStackTrace();
        return Result.error("对不起，操作失败，请联系管理员！");
    }
}
