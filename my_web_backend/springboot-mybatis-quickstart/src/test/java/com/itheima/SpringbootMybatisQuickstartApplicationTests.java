package com.itheima;

import com.itheima.mapper.UserMapper;
import com.itheima.pojo.User;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
class SpringbootMybatisQuickstartApplicationTests {

    @Autowired
    private SAXReader saxReader;

    @Test
    public void testThirdBean() throws Exception{
        Document document = saxReader.read(this.getClass().getClassLoader().getResource("1.xml"));
        Element rootElement  = document.getRootElement();
        String name = rootElement.element("name").getText();//获取xml文件中的name信息
        String age = rootElement.element("age").getText();//获取xml文件中的age信息

        System.out.println(name + ":" + age);
    }
}
