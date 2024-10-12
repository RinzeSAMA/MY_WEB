package com.itheima.controller;

import com.aliyun.oss.AliOSSUtils;
import com.itheima.annotation.Log;
import com.itheima.pojo.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


/**
 * 文件上传controller
 */
@Slf4j
@RestController
public class UploadController {
    @Autowired
    private AliOSSUtils aliOSSUtils;
    //本地存储
    /*@PostMapping("/upload")
    public Result upload(String username, Integer age, MultipartFile image) throws Exception {
        log.info("文件上传");

        //获取原始文件名
        String originalFilename = image.getOriginalFilename();

        //构造一个唯一的文件名(不能重复) --uuid(通用唯一识别码)
        int index = originalFilename.lastIndexOf(".");//获取文件名最后一个点所处的位置
        String extname = originalFilename.substring(index);
        String newFileName = UUID.randomUUID().toString() + extname;
        log.info("新的文件名：{}",newFileName);

        //将文件存储在服务器的磁盘目录中
        image.transferTo(new File("D:\\Develop\\Codes\\springboot-mybatis-quickstart" +
                "\\springboot-mybatis-quickstart\\src\\main\\resources\\pictures\\"+newFileName));

        return Result.success();
    }*/
    @Log
    @PostMapping("/upload")
    public Result upload(MultipartFile image) throws IOException {
        log.info("文件上传，文件名：{}",image.getOriginalFilename());
        //调用阿里云oss工具类进行文件上传
        String url = aliOSSUtils.upload(image);
        log.info("文件上传完成，文件访问的url：{}",url);
        return  Result.success(url);
    }


}
