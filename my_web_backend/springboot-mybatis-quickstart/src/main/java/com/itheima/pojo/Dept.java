package com.itheima.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor//无参构造
@AllArgsConstructor//有参构造
public class Dept {
    private Integer dpid;
    private String dpName;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
