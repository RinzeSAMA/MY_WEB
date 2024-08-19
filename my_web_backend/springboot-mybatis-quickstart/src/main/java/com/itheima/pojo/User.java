package com.itheima.pojo;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor//无参构造
@AllArgsConstructor//有参构造
public class User {
    private Integer id;
    private String name;
    private short age;
    private short gender;
    private String phone;
    private String region;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer dpid;
    private String image;

    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate birthday;
    private String username;
    private String password;
}
