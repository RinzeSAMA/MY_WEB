
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import {createRouter,
    createWebHashHistory,} from 'vue-router'

const routes = [
   
    {
        path:'/',
        redirect: 'Login'
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../views/Login.vue'),
        
    },

    {
        path:'/home',
        name:'Home',
        component:()=> import('../views/Home.vue'),
        children:[
            {
                path:'',
                name:'Default',
                component:()=>import('../components/HomePage.vue')
            },
            {
                path:'homePage',
                name:'HomePage',
                component:()=>import('../components/HomePage.vue'),
                children:[
                    {
                        path:'/following',
                        name:'Following',
                        component:()=>import('../components/HomePage/Following.vue')
                    },
                    {
                        path:'/followers',
                        name:'Followers',
                        component:()=>import('../components/HomePage/Followers.vue')
                    }
                ]
            },
            {
                path:'user_table',
                name:'UserTable',
                component:()=>import('../components/UserTable.vue')
            },
            {
                path:'dept_table',
                name:'DeptTable',
                component:()=>import('../components/DeptTable.vue')
            }
        ]
    },
    {
        path:'/depts',
        name:'addDepts',
        component:()=> import('../views/depts.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

//设置全局的前置导航守卫
router.beforeEach((to,from,next) =>{
    if(to.path==='/login')/*如果跳转登录页面，移除token*/{
        next()
    }
    else{
        let token = localStorage.getItem('token');
        if(token===null||token===''){
            next('/login')
        }//token不存在，则跳转到登录页面
        else{
            next()
        }
    }
})

export default router