package com.itheima.controller;

import com.itheima.annotation.Log;
import com.itheima.pojo.Dept;
import com.itheima.pojo.Result;
import com.itheima.service.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import java.util.List;

/**
 * 部门管理Controller
 * */
@Slf4j//此注解自动生成日志记录对象
@RestController
public class DeptController {

    @Autowired
    private DeptService deptService;

    //查询全部部门
    @GetMapping("/depts")
    public Result list(){
        log.info("查询全部部门数据");//输出日志

        //调用service查询部门数据
        List<Dept> deptList=deptService.list();//获取列表
        return Result.success(deptList);
    }

    //根据id删除部门
    //@Log
    @DeleteMapping("/depts/{id}")
    public Result delete(@PathVariable Integer id){
        log.info("根据id删除部门：{}",id);

        //调用service删除部门
        deptService.delete(id);
        return Result.success();
    }

    //新增部门
    //@Log
    @PostMapping("/depts")
    public Result insert(@RequestBody Dept dept){
        log.info("新增部门：{}",dept);
        deptService.add(dept);
        return Result.success();
    }

    //根据id查询部门
    @GetMapping("/depts/{id}")
    public Result getById(@PathVariable Integer id){
        log.info("根据id查询部门:{}",id);

        Dept dept = deptService.get(id);
        return Result.success(dept);
    }

    //修改部门信息
    //@Log
    @PutMapping("/depts")
    public Result update(@RequestBody Dept dept){

        log.info("更新部门：{}",dept);
        deptService.update(dept);
        return Result.success();
    }
}
