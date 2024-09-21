package com.itheima.mapper;

import com.itheima.pojo.PageBean;
import com.itheima.pojo.User;
import com.itheima.pojo.UserUnionDepts;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;

/**
 *用户操作Mapper
 */

@Mapper //在运行时，框架会自动生成该接口的实现类对象，此对象交给IOC容器管理
public interface UserMapper {
    //查询全部用户信息的方法(是联合查询，用于渲染页面)
    List<UserUnionDepts> list();

    //批量删除数据,根据id
    void delete(List<Integer> ids);

    /**
     * 根据部门id删除除该部门的员工
     */
    @Delete("delete from user_infor where dpid = #{dpId}")
    void deleteByDpId(Integer dpId);

    //获取主键
    @Options(useGeneratedKeys = true/*获取主键为真*/,keyProperty = "id"/*获取到的主键往哪个属性封装*/)
    //新增用户(注册逻辑)
    void add_user(User user);

    //更新用户
    void update_user(User user);

    //根据ID查询用户
    List<User> get_user_ById(List<Object> ids);

    /**
     * 查询总记录数,当前记录数
     */
    @Select("select count(*) from user_infor")
    Long count();
    /**
     * 分页查询，获取列表数据
     */
    //@Select("select * from user_infor limit #{page},#{pageSize}")
    List<User> page(Integer page, Integer pageSize, String name, Short gender,String region, LocalDate begin, LocalDate end);

    /**
     * 登录验证，查找数据库中是否有此用户，用户名密码是否匹配
     */
    @Select("select * from  user_infor where username = #{username} and password = #{password}")
    User getByUsernameAndPassword(User user);

    List<User> getFollowers(Integer id);

    List<User> getFollowing(Integer id);
}

