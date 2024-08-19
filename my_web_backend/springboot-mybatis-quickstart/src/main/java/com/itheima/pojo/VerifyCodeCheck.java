package com.itheima.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VerifyCodeCheck {
    String inputCode;//前端输入的验证码
    String key;//图片验证码的key
}
