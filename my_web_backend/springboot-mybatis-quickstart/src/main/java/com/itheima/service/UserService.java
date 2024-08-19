package com.itheima.service;

import com.itheima.pojo.Dept;
import com.itheima.pojo.PageBean;
import com.itheima.pojo.User;
import com.itheima.pojo.UserUnionDepts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;
/**
 * 用户管理
 */
public interface UserService {
    /**
     * 查询全部用户数据
     */
    List<UserUnionDepts> list();

    void delete(List<Integer> ids);

    void add(User user);

    List<User> get(List<Object> ids);


    void update(User user);

    PageBean page(Integer page, Integer pageSize,String name, Short gender,String region, LocalDate begin,LocalDate end);

    User login(User user);
}
