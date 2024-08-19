package com.itheima.service.impl;

import com.itheima.mapper.DeptMapper;
import com.itheima.mapper.UserMapper;
import com.itheima.pojo.Dept;
import com.itheima.pojo.DeptLog;
import com.itheima.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DeptServiceImpl implements DeptService {
    @Autowired
    private DeptMapper deptMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DeptLogServiceImpl deptLogService;

    //查询全部部门
    @Override
    public List<Dept> list(){
        return deptMapper.list();
    }


    //根据id删除部门,并且删除部门下的员工
    @Transactional/*(rollbackFor = Exception.class)*///spring事务管理,默认只有出现RunTimeException才会回滚。如果有事务，默认会加入到当前事务中。
    @Override
    public void delete(Integer id) {
        try {
            deptMapper.deleteById(id);//根据id删除部门数据

            userMapper.deleteByDpId(id);//根据部门id删除该部门下的员工


        } finally {
            //记录操作日志
            DeptLog deptLog = new DeptLog();
            deptLog.setCreateTime(LocalDateTime.now());
            deptLog.setDescription("执行了解散部门的操作，此次解散的是"+id + "号部门");
            deptLogService.insert(deptLog);
        }
    }//无论删除操作成功与否，都执行记录日志操作

    //新增部门
    @Override
    public void add(Dept dept) {
        dept.setCreateTime(LocalDateTime.now());
        dept.setUpdateTime(LocalDateTime.now());//补全日期属性
        deptMapper.insert(dept);
    }

    //根据id查询部门
    @Override
    public Dept get(Integer id) {
        return deptMapper.getById(id);
    }

    //更新部门
    @Override
    public void update(Dept dept) {
        dept.setUpdateTime(LocalDateTime.now());
        deptMapper.update(dept);
    }
}
