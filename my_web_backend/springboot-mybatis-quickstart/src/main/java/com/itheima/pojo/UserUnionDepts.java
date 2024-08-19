package com.itheima.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *此类用于接收联合查询返回结果
 */

@Data
@NoArgsConstructor//无参构造
@AllArgsConstructor//有参构造
public class UserUnionDepts {
    private String image;
    private String dpName;
    private String name;
    private short age;
    private short gender;
    private String phone;
    private String region;
}
