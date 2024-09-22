package com.itheima.controller;

import com.itheima.pojo.Result;
import com.itheima.pojo.User;
import com.itheima.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class FollowController {

    @Autowired
    private UserService userService;

    /**
     * 查询粉丝
     */
    @GetMapping("/followers/{id}")
    public Result follower(@PathVariable Integer id){
        log.info("查询粉丝列表");
        List<User> userlist = userService.followerList(id);
        return Result.success(userlist);
    }

    /**
     * 查询关注的人
     */
    @GetMapping("/following/{id}")
    public Result following(@PathVariable Integer id){
        log.info("查询关注的人列表");
        List<User> userlist = userService.followingList(id);
        return Result.success(userlist);
    }
}