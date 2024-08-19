<script setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { ref, onMounted, reactive, watch, defineComponent } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import {useStore} from 'vuex'

/*常规数据*******************************/
const isCollapse = ref(true)
const router = useRouter()
const store = useStore()

function Exit(){
  if(confirm('您确定要退出吗')){
    localStorage.removeItem('token')
    sessionStorage.removeItem('avatar')
    router.push({name:'Login'})
  }
}
/***************************************/





</script>

<template>
  <el-aside class="aside">
    <el-scrollbar>
      <el-radio-group v-model="isCollapse" class="radio">
        <el-radio-button :value="false" class="button">展开</el-radio-button>
        <el-radio-button :value="true" class="button">收起</el-radio-button>
      </el-radio-group>
      <el-menu 
        :default-openeds="['1', '2', '3']"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><message /> </el-icon>
            <span>上传</span>
          </template>
          <el-menu-item-group>
            <template #title>添加</template>
            <el-menu-item index="1-1">添加部门</el-menu-item>
            <el-menu-item index="1-2">添加用户</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="上传">
            <el-menu-item index="1-3">上传照片</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><IconMenu /></el-icon>
            <span>数据</span>
          </template>

          <el-menu-item-group>
            <template #title>信息列表</template>
            <el-menu-item @click="router.push({name:'DeptTable'})" index="2-1">部门</el-menu-item>
            <el-menu-item @click="router.push({name:'UserTable'})" index="2-2">用户</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="日志列表">
            <el-menu-item index="2-3">操作日志</el-menu-item>
            <el-menu-item index="2-4">部门删除日志</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><setting /> </el-icon>
            <span>设置</span>
          </template>
          <el-menu-item-group>
            <template #title>个人</template>
            <el-menu-item @click="router.push('/home')" index="3-1">我的主页</el-menu-item>
            <el-menu-item @click="Exit()" index="3-2">退出</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>

.aside{
 /* border: 3px solid #cc1414;*/
  width: 200px;
}
.radio{
  margin-bottom: 20px;
  margin-top: 20px;

  position: relative;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /*border: 3px solid #cc1414;*/
  width: auto;
  min-height: 400px;;
  position: relative;
}
</style>
