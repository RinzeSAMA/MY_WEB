package com.itheima.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

/**
 * 分页查询结果封装类,带有总记录数，当前分页数据
 */
@Data
@NoArgsConstructor//无参构造
@AllArgsConstructor//有参构造
public class PageBean {
    private Long total;//总记录数
    private Long cur;//当前页记录数
    private List rows;//当前分页数据列表
}
