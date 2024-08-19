package com.itheima.controller;

import com.itheima.annotation.Log;
import com.itheima.pojo.PageBean;
import com.itheima.pojo.Result;
import com.itheima.pojo.User;
import com.itheima.pojo.UserUnionDepts;
import com.itheima.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

/**
 * 用户管理controller
 * */
@Slf4j
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 查询全部用户（查）
     */
    @GetMapping("/users")
    public Result list(){
        log.info("查询全部用户数据");
        List<UserUnionDepts> userList=userService.list();
        return Result.success(userList);
    }

    /**
     * 根据id删除用户，也可以批量删除
     */
    //@Log
    @DeleteMapping("/users/{ids}")
    public Result delete(@PathVariable List<Integer> ids){
        log.info("根据接收的id数组批量删除用户");

        userService.delete(ids);
        return Result.success();
    }

    //新增用户(注册)
    //@Log
    @PostMapping("/users")
    public Result insert(@RequestBody User user){
        log.info("新增用户：{}",user);
        userService.add(user);
        return Result.success();
    }

    //根据id（用户名）查询用户
    @GetMapping("/users/{ids}")
    public Result getById(@PathVariable List<Object> ids){
        log.info("根据id批量查询用户{}",ids);

        List<User> userlist= userService.get(ids);
        return Result.success(userlist);
    }

    //修改用户信息
    //@Log
    @PutMapping("/users")
    public Result update(@RequestBody User user){

        log.info("更新用户：{}",user);
        userService.update(user);
        return Result.success();
    }

    /**
     * 分页条件查询用户,
     * 获取前端传递的当前页码page(默认为1)，每页展示记录数pageSize(默认为10)，姓名关键字name,性别gender,生日下限begin，上限end
     * 然后向前端返回总记录数total，数据列表list
     */
    @GetMapping("/users1")
    public Result listByPage(@RequestParam(defaultValue = "1") Integer page,//默认参数注解
                             @RequestParam(defaultValue = "10") Integer pageSize,
                             String name, Short gender,String region,
                             @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin, //日期格式注解
                             @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){

        log.info("分页查询,参数：{}，{}，{}，{}，{}，{},{}",page,pageSize,name,gender,region,begin,end);
        //调用service分页查询
        PageBean pageBean=userService.page(page,pageSize,name,gender,region,begin,end);
        return Result.success(pageBean);
    }

}
