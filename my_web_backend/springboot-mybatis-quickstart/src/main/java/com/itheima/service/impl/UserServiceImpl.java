package com.itheima.service.impl;

import com.itheima.mapper.UserMapper;
import com.itheima.pojo.Dept;
import com.itheima.pojo.PageBean;
import com.itheima.pojo.User;
import com.itheima.pojo.UserUnionDepts;
import com.itheima.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public List<UserUnionDepts> list(){
        return userMapper.list();
    }

    @Override
    public void delete(List<Integer> ids) {
        userMapper.delete(ids);
    }

    @Override
    public void add(User user) {

        user.setCreateTime(LocalDateTime.now());
        user.setUpdateTime(LocalDateTime.now());
        userMapper.add_user(user);
    }

    @Override
    public List<User> get(List<Object> ids) {
        return userMapper.get_user_ById(ids);
    }

    @Override
    public void update(User user) {

        user.setUpdateTime(LocalDateTime.now());
        userMapper.update_user(user);
    }


    @Override
    public PageBean page(Integer page, Integer pageSize,String name, Short gender,String region, LocalDate begin, LocalDate end) {
        //1.获取数据库总记录数，当前页面记录数
        Long count = userMapper.count();
        //2.获取分页查询结果
        Integer start = (page-1)*pageSize;//起始索引
        List<User> userList = userMapper.page(start,pageSize,name,gender,region,begin,end);
        Long curcount = (long) userList.size();//获取当前数组长度，即分页的数据量
        //3.封装PageBean对象
        PageBean pageBean = new PageBean(count,curcount,userList);
        return pageBean;
    }

    @Override
    public User login(User user) {
        return userMapper.getByUsernameAndPassword(user);
    }


}
