<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import image from "../assets/Rinze.png"
import { jwtDecode } from "jwt-decode"
import { Avatar } from "@element-plus/icons";
import { useStore } from 'vuex'

const activeIndex = ref("1");
const router = useRouter()
const store = useStore()

function Exit(){
  if(confirm('您确定要退出吗')){
    localStorage.removeItem('token')
    sessionStorage.removeItem('avatar')
    router.push({name:'Login'})
  }
}
console.log(store.state.avatar)
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="../assets/element-plus-logo.svg"
        alt="Element logo"
        
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">管理系统</el-menu-item>
    <el-sub-menu index="2">
      <template #title>博客</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <div class="flex-grow" />
    <el-menu-item index="3">
      <el-dropdown>
        <el-avatar
          :src="store.state.avatar"
          :size="50"
          class="avater"
        />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/home')">我的主页</el-dropdown-item>
                <el-dropdown-item @click="Exit()">退出</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    </el-menu-item>
    
  
  </el-menu>
  
</template>



<style scoped>
.flex-grow {
  flex-grow: 1;
  border: 3px solid #cf0303e2;
}

.avater{
  background-color: #ffff;
  border: 1px solid#828080;
}
</style>
