<script setup>
import { ref, onMounted,reactive } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import {useStore} from 'vuex'

get_List_of_Depts()

const tableData = ref([])
const tableColumns = ref([
    {
        COID:"dpid",
        COName:"部门id"
    },
    {
        COID:"dpName",
        COName:"部门"
    },
    {
        COID:"createTime",
        COName:"创建时间",
    },
    {
        COID:"updateTime",
        COName:"更新时间"
    }
])
async function get_List_of_Depts() {
    const res = await axios({
      url: "http://localhost:8080/depts",
      method: "GET",
    }).catch(error=>{
      alert("网络异常！")
    })
    /*res变量接收查询部门表的返回值*/
    tableData.value = res.data.data;
    //alert("已接收服务端的数据")
    // store.commit('setTableData', tableData)
    // console.log("已提交仓库")
    // console.log("已跳转")
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
                            <el-image v-if="item == 'image'" :src="scope.row.image" class="image"
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
.table{
    margin-top:3%;
}
</style>