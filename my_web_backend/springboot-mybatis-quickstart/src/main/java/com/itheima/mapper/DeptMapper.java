package com.itheima.mapper;

import com.itheima.pojo.Dept;
import org.apache.ibatis.annotations.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * 部门操作Mapper
 */

@Mapper
public interface DeptMapper {

    //查询全部部门
    @Select("select * from dept_infor")
    public List<Dept> list();


    //根据id删除部门
    @Delete("delete from dept_infor where dpid = #{id}")
    void deleteById(Integer id);

    //新增部门
    @Insert("insert into dept_infor(dp_name,create_time,update_time) values(#{dpName},#{createTime},#{updateTime})")
    void insert(Dept dept);

    //根据id查询部门
    @Select("select * from dept_infor where dpid = #{id}")
    Dept getById(Integer id);

    //更新部门
    void update(Dept dept);
}
