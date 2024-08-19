package com.itheima.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor//无参构造
@AllArgsConstructor//有参构造
public class DeptLog {
    int dpid;
    LocalDateTime createTime;
    String description;
}
