package com.itheima.controller;

import com.itheima.pojo.Result;
import com.itheima.pojo.User;
import com.itheima.pojo.VerifyCode;
import com.itheima.service.UserService;
import com.itheima.utils.JwtUtils;
import com.itheima.utils.redis.RedisUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedCaseInsensitiveMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
/**
 *用户登录controller
 */

@Slf4j
@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Result login(@RequestBody User user){
        log.info("用户登录：{}",user);
        User tmp = userService.login(user);

        //登录成功，生成令牌，下发令牌
        if(tmp!=null){
            Map<String, Object> claims = new HashMap<>();
            claims.put("id",tmp.getId());
            claims.put("name",tmp.getName());
            claims.put("image",tmp.getImage());
            claims.put("phone",tmp.getPhone());
            claims.put("region",tmp.getRegion());
            claims.put("gender",tmp.getGender());
            claims.put("username",tmp.getUsername());

            String jwt = JwtUtils.generateJwt(claims);//jwt中包含了当前登录的员工信息
            return Result.success(jwt);
        }

        //登录失败，返回错误信息
        return Result.error("用户名或密码错误！！！");
    }
}
