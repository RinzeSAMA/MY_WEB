package com.itheima.controller;

import com.itheima.pojo.Result;
import com.itheima.pojo.VerifyCode;
import com.itheima.pojo.VerifyCodeCheck;
import com.itheima.utils.redis.RedisUtil;
import com.wf.captcha.SpecCaptcha;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class CaptchaController {
    @Autowired
    private RedisUtil redisUtil;


    @GetMapping("/captcha/get")
    public Result captcha(HttpServletRequest request, HttpServletResponse response) throws Exception {

        //定义图形验证码的参数
        SpecCaptcha specCaptcha = new SpecCaptcha(130, 48, 5);

        String verCode = specCaptcha.text().toLowerCase();
        String key = UUID.randomUUID().toString();
        // 存入redis并设置过期时间为2分钟
        redisUtil.set(key, verCode, 180);
        // 将key和base64返回给前端
        VerifyCode verifyCode = new VerifyCode(key,specCaptcha.toBase64());
        return Result.success(verifyCode);
    }

    @ResponseBody
    @PostMapping("/captcha/check")
    public Result login(@RequestBody VerifyCodeCheck verifyCodeCheck){

        // 根据Verkey获取redis中的对应的验证码
        String redisCode = (String) redisUtil.get(verifyCodeCheck.getKey());
        System.out.println(verifyCodeCheck.getKey());
        System.out.println(verifyCodeCheck.getInputCode());
        System.out.println(redisCode);
        // 判断输入的验证码是否正确
        if (verifyCodeCheck.getInputCode()==null || !redisCode.equals(verifyCodeCheck.getInputCode().trim().toLowerCase())) {
            return Result.error("验证码不正确");
        }
        return Result.success();
    }
}
