package com.itheima.service;

import com.itheima.pojo.Dept;

import java.util.List;

public interface DeptService {

    //查询全部部门
    List<Dept> list();

    //根据id删除部门
    void delete(Integer id);

    //新增部门
    void add(Dept dept);

    //根据id查询部门
    Dept get(Integer id);

    //更新部门
    void update(Dept dept);
}
