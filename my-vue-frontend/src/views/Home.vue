<script setup>
import Header2 from '../components/Header2.vue'
import Aside from '../components/Aside.vue'
import DeptTable from '../components/DeptTable.vue'
import { useRouter,useRoute } from 'vue-router'
import { ref,reactive, onBeforeMount,onMounted } from 'vue'
import axios from 'axios'

import { jwtDecode } from "jwt-decode";
/***************************************/
const router = useRouter()

const infor = jwtDecode(localStorage.getItem("token"));
</script>

<template>

  <el-header>
    <Header2>
    </Header2>
  </el-header>
  
    
  <el-container class="main">
    <Aside>
    </Aside>
    <!-- 动态展示 -->

        <router-view>

        </router-view>
  

  </el-container>
  
  
    
   
</template>


<style scoped>
.main{

  /*border: 3px solid #a7cc14;*/

}
</style>