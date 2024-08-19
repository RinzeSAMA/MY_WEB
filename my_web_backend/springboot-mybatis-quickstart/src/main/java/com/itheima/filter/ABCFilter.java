package com.itheima.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;

import java.io.IOException;

/*
@WebFilter(urlPatterns = "/*")//“*”表示拦截所有请求
public class ABCFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("ABC 的init 初始化方法执行了");
    }//初始化方法，只使用一次

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        //拦截到了请求，如不予放行，所有操作都不能实现。因此需要放行
        System.out.println("ABC 拦截到了请求，执行放行前的逻辑");

        //放行，调用对应接口，获取资源
        filterChain.doFilter(servletRequest,servletResponse);

        //资源访问完成后，回到Filter中，执行放行后的逻辑
        System.out.println("ABC 执行放行后的逻辑");

    }//拦截到请求之后调用，调用多次

    @Override
    public void destroy() {
        System.out.println("ABD 的destroy 销毁方法执行了");
    }//销毁方法，只使用一次
}*/
