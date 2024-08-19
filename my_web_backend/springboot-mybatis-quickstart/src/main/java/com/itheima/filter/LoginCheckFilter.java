package com.itheima.filter;


import com.alibaba.fastjson.JSONObject;
import com.itheima.pojo.Result;
import com.itheima.utils.JwtUtils;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.io.IOException;

/**
 * 登录校验器
 * 过滤器拦截的是整个tomca中的资源请求（包括spring）
 */
/*
@Slf4j
@WebFilter(urlPatterns = "/*")//“*”表示拦截所有请求
public class LoginCheckFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("init 初始化方法执行了");
    }//初始化方法，只使用一次

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        //拦截到了请求，如不予放行，所有操作都不能实现。因此需要放行
        System.out.println("拦截到了请求，执行放行前的逻辑");

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse resp = (HttpServletResponse) servletResponse;

        //1.获取请求url
        String url = req.getRequestURL().toString();
        log.info("请求的url:{}",url);

        //2.判断请求的url是否含有login路径，如果包含，说明是登录操作，放行
        if(url.contains("login")){
            log.info("登录操作，直接放行！");
            filterChain.doFilter(servletRequest,servletResponse);
            return;
        }

        //3.获取请求头中的令牌（token）
        String jwt = req.getHeader("token");//获取请求头中token数据,即JWT令牌

        //4.判断令牌是否存在，如果不存在，返回登录结果（未登录状态）
        if(!StringUtils.hasLength(jwt)){
            log.info("请求头token为空，返回未登录状态");
            Result error = Result.error("NOT_LOGIN");
            //手动转换，将Result对象转换为json对象返回---->阿里巴巴fastJSON工具包
            String notLogin = JSONObject.toJSONString(error);
            resp.getWriter().write(notLogin);
            return;
        }

        //5.解析token，如果解析失败，返回错误结果（未登录状态）
        try {
            JwtUtils.parseJWT(jwt);
        } catch (Exception e) {//jwt令牌解析错误，报错
            e.printStackTrace();
            log.info("获取JWT令牌错误，返回未登录状态");
            Result error = Result.error("NOT_LOGIN");
            //手动转换，将Result对象转换为json对象返回---->阿里巴巴fastJSON工具包
            String notLogin = JSONObject.toJSONString(error);
            resp.getWriter().write(notLogin);
            return;
        }

        //6.放行，调用对应接口，获取资源
        log.info("令牌合法，放行！");
        filterChain.doFilter(req,resp);

        //资源访问完成后，回到Filter中，执行放行后的逻辑
        System.out.println("执行放行后的逻辑");

    }//拦截到请求之后调用，调用多次

    @Override
    public void destroy() {
        System.out.println("destroy 销毁方法执行了");
    }//销毁方法，只使用一次
}
*/
