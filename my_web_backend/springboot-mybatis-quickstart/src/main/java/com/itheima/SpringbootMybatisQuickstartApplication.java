package com.itheima;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan//开启了对Servlet组件的支持
@SpringBootApplication
public class SpringbootMybatisQuickstartApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootMybatisQuickstartApplication.class, args);
    }

}
