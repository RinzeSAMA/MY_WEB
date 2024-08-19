import {createApp} from 'vue'
import {createStore} from 'vuex'


const store = createStore({
    state:{
        msg:'我是vuex哦',
        avatar:'',
    },//state是存放数据的仓库
    mutations:{
        set(state,url){
            state.avatar = url
        }
    },//mutatitons更改仓库中的数据
    actions:{

    },//action异步操作获取数据
    getters:{

    },//getters加工数据中的仓库数据
})
export default store