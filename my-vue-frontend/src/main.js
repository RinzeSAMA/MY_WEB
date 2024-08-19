import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'//导入ElementPlus组件库的所有模块和功能
import 'element-plus/dist/index.css'
import router from './router'
import VueParticles from 'particles.vue3'
import  * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import axios from 'axios'
const app = createApp(App)
app.use(router).use(ElementPlus).use(VueParticles).use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//配置axios的全局基本路径
axios.defaults.baseURL = 'http://lcoalhost:8080';
//全局属性配置，在任意组件内可以使用this.$http获取axios对象
//createApp.prototype.$http = axios

//配置axios前置拦截器，作用是让所有axios请求携带token，后台需要token校验是否登录
axios.interceptors.request.use(config =>{
    //1.从缓存中获取到token
    let token = localStorage.getItem("token");
    //2.如果token不为null,那么设置到请求头中，此处哪怕为null,我们也不进行处理，因为后台会进行拦截
    if(token){
        //后台给登录用户设置的token键是什么，headers['']里的键也应该保持一致
        config.headers['token'] = token;
    }
    //3.放行
    return config;
},error =>{
    //失败后抛出错误
    Promise.reject(error);
})
app.mount('#app')