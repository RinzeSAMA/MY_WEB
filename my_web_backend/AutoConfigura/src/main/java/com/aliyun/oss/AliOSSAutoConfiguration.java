package com.aliyun.oss;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(AliyunProperties.class)
public class AliOSSAutoConfiguration {

    @Bean//将AliyunUtils声明为了IOC容器中的Bean
    public AliOSSUtils aliOSSUtils(AliyunProperties aliyunProperties){
        AliOSSUtils aliOSSUtils = new AliOSSUtils();
        aliOSSUtils.setAliyunProperties(aliyunProperties);
        return aliOSSUtils;
    }
}
