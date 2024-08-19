<script setup>
import { ref, onMounted,reactive } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import {useStore} from 'vuex'

get_List_of_Users()

const tableData = ref([])
const tableColumns = ref([
    {
        COID:"image",
        COName:"头像",
    },
    {
        COID:"dpName",
        COName:"部门"
    },
    {
        COID:"name",
        COName:"姓名"
    },
    {
        COID:"age",
        COName:"年龄"
    },
    {
        COID:"gender",
        COName:"性别"
    },
    {
        COID:"phone",
        COName:"手机号",
    },
    {
        COID:"region",
        COName:"地区"
    }
])

async function get_List_of_Users() {
  const res = await axios({
    url: "http://localhost:8080/users",
    method: "GET",
  }).catch(error=>{
    alert("网络异常！")
  })/*res变量接收查询用户表的返回值*/
  tableData.value = res.data.data;
  //alert("已接收服务端的数据")
}
</script>

<template>
    <el-container style="border">
        <el-main>
            <el-scrollbar>

                <!-- 获取数据表时，渲染此盒子GET -->
                <div class="table">
                <el-table :data="tableData" border style="width=100%">
                    <el-table-column :prop="item.COID" :label="item.COName" v-for="(item, index) in tableColumns" align="center"
                        header-align="center">

                        <template #default="scope"><!-- scope获取当前作用域 -->
                            <el-image v-if="item.COID == 'image'" :src="scope.row.image" class="image"
                                :preview-src-list="[scope.row.image]" :preview-teleported="true">
                            </el-image>
                        </template>
                    </el-table-column>
                </el-table>
                </div>
                <!-- 添加数据时，渲染此盒子 POST-->
                 
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<style scoped>
.image {
    width: 20%;
    height: 20%;
}
</style>