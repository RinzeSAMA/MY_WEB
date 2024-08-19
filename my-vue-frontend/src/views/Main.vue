<script lang="ts" setup>
import { ref, onMounted,reactive } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

const tableData = ref([])/*储存表格行数据*/
let tableColumns
let currentview

async function get_List_of_Depts() {
    currentview = 'table'
    const res = await axios({
        url: "http://localhost:8080/depts",
        method: "GET"
    })/*res变量接收查询部门表的返回值*/
    tableData.value = res.data.data;
    tableColumns = Object.keys(tableData.value[0]);
}

async function get_List_of_Users() {
    currentview = 'table'
    const res = await axios({
        url: "http://localhost:8080/users",
        method: "GET"
    })/*res变量接收查询用户表的返回值*/
    tableData.value = res.data.data;
    tableColumns = Object.keys(tableData.value[0]);   
}

async function exit() {
    
    router.go(-1);
    router.push('/login')
}

</script>

<template>
    <el-header>
        <div class="toolbar">
            <div class="title">
                <span>WEB后台管理系统</span>
            </div>
            <el-dropdown>
                <el-icon style="margin-right: 8px">
                    <setting />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>Tom</span>
        </div>
    </el-header>

    <el-container class="layout-container-demo">

        
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu :default-openeds="['1','2', '3']">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <message />
                            </el-icon>上传
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
                            <el-icon><icon-menu /></el-icon>数据表
                        </template>

                        <el-menu-item-group>
                            <template #title>信息列表</template>
                            <el-menu-item @click="get_List_of_Depts" index="2-1">部门</el-menu-item>
                            <el-menu-item @click="get_List_of_Users" index="2-2">用户</el-menu-item>
                        </el-menu-item-group>

                        <el-menu-item-group title="日志列表">
                            <el-menu-item index="2-3">操作日志</el-menu-item>
                            <el-menu-item index="2-4">部门删除日志</el-menu-item>
                        </el-menu-item-group>

                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <setting />
                            </el-icon>设置
                        </template>
                        <el-menu-item-group>
                            <template #title>个人</template>
                            <el-menu-item index="3-1">View</el-menu-item>
                            <el-menu-item index="3-2">Add</el-menu-item>
                            <el-menu-item @click="exit" index="3-2">Exit</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-main>
                <el-scrollbar>

                    <!-- 获取数据表时，渲染此盒子GET -->
                    <div>
                    <el-table :data=tableData>
                        <el-table-column :prop="item" :label="item" v-for="(item, index) in tableColumns" align="center"
                            header-align="center">

                            <template #default="scope"><!-- scope获取当前作用域 -->
                                <el-image v-if="item == 'image'" :src="scope.row.image" class="image"
                                    :preview-src-list="[scope.row.image]">
                                </el-image>
                            </template>
                        </el-table-column>
                    </el-table>
                    </div>
                    <!-- 添加数据时，渲染此盒子 POST-->
                     
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>



<style scoped>
@import '../css/main.css'
</style>