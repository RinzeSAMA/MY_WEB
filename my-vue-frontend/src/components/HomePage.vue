<script setup>
import { Avatar, Calendar, Male, UserFilled } from "@element-plus/icons";
import image from "../assets/Rinze.png";
import { reactive, ref } from "vue";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
import ToAvatar from "../components/HomePage/ToAvatar.vue";
import Followers from "../components/HomePage/Followers.vue";
import Following from "../components/HomePage/Following.vue";
import { useStore } from "vuex";

// do not use same name with ref
const form = reactive({
  name: "",
  gender: "",
  date1: "",
  region: "",
  phone: "",
});

function isFormEmpty(form) {
  for (let key in form) {
    if (form[key] !== undefined && form[key] !== null && form[key] !== "") {
      return false; // 如果任何一个属性有值，则返回false，表示表单不为空
    }
  }
  return true; // 如果所有属性都为空，则返回true，表示表单为空
}

// 修改完成后，提交表单
async function submit() {
  if (isFormEmpty(form)) {
    return;
  }
  await axios({
    url: `http://localhost:8080/users`,
    method: "PUT",
    data: {
      id: infor.id,
      name: form.name,
      gender: form.gender,
      birthday: form.date1,
      region: form.region,
      phone: form.phone,
    },
  })
    .then((response) => {
      if (response.data.code == 1) {
        alert("修改成功！");
        Init();
        router.go(0);
      }
    })
    .catch((error) => {
      alert("修改失败！");
    });
}

//初始化页面
async function Init() {
  await axios({
    url: `http://localhost:8080/users/${infor.username}`,
    method: "GET",
  }).then((response) => {
    if (response.data.code == 1) {
      user = response.data.data[0];
      console.log(user.image);
      getCountOfFans()
      getCountOfFollowing()
      isInit.value = true;
      store.commit("set", user.image);
      
    }
  });
  
}
const router = useRouter();
const store = useStore();
let user;
const fans = ref(0);
const following = ref(0);
let isInit = ref(false);
let showInfor = ref(true);
const infor = jwtDecode(localStorage.getItem("token"));
Init();

//查询粉丝数量
async function getCountOfFans() {
  await axios({
    url:`http://localhost:8080/countOfFollowers/${infor.id}`,
    method:'GET',
  }).then((response)=>{
    if(response.data.code==1){
      fans.value = response.data.data
    }
  })
}

//查询关注的人数量
async function getCountOfFollowing() {
  await axios({
    url:`http://localhost:8080/countOfFollowing/${infor.id}`,
    method:'GET',
  }).then((response)=>{
    if(response.data.code==1){
      following.value = response.data.data
    }
  })
}
/**************************************/
</script>

<template>
  <el-container class="HomePage">
    <div class="infor" v-if="isInit == true">
      <!-- 头像板块 -->
      <ToAvatar :userImage="user.image"> </ToAvatar>
      <!-- 个人信息展示 -->
      <div class="showInfor" v-if="showInfor == true">
        <span class="name" v-if="user.name">
          {{ user.name }}
        </span>
        <span class="username">
          <el-icon v-if="user.gender == 1" size="22px" style="margin-right: 2%"
            ><Male
          /></el-icon>
          <el-icon v-if="user.gender == 2" size="22px" style="margin-right: 2%"
            ><Female
          /></el-icon>
          {{ user.username }}
        </span>
        <el-button
          type="info"
          plain
          @click="showInfor = false"
          style="margin-bottom: 8%"
        >
          <el-icon :size="20"><Edit /></el-icon>
          编辑个人信息</el-button
        >
        <!-- 关注与被关注板块 -->
        <span class="col" style="margin-bottom: 15%">
          <el-icon size="20px" style="margin-right: 2%">
            <UserFilled />
          </el-icon>
          <el-link :underline="false" class="follow-link" @click="router.push('/followers')">
            <span style="margin-top: 3%; font-size: 14px; font-weight: bold"
              >&nbsp;{{fans}}</span
            >
            &nbsp;粉丝</el-link
          >
          <span style="height: 75%; margin-left: 5%; margin-right: 5%">·</span>
          <el-link
            :underline="false"
            class="follow-link"
            @click="router.push('/following')"
          >
            <span style="margin-top: 3%; font-size: 14px; font-weight: bold"
              >{{following}}</span
            >
            &nbsp;关注数</el-link
          >
        </span>

        <span class="col" v-if="user.region">
          <el-icon size="20px" style="margin-right: 2%">
            <LocationFilled />
          </el-icon>
          {{ user.region }}
        </span>

        <span class="col" v-if="user.phone">
          <el-icon size="20px" style="margin-right: 2%">
            <Phone />
          </el-icon>
          {{ user.phone }}
        </span>

        <span class="col" v-if="user.birthday">
          <el-icon size="20px" style="margin-right: 2%">
            <Calendar />
          </el-icon>
          {{ user.birthday }}
        </span>
      </div>
      <!-- 个人信息编辑板块 -->
      <div class="edit" v-if="showInfor == false">
        <el-form label-width="100px" label-position="top">
          <el-form-item label="">
            <el-input v-model="form.name" placeholder="姓名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="form.gender" placeholder="性别">
              <template #prefix>
                <el-icon>
                  <Avatar />
                </el-icon>
              </template>
              <el-option label="男" value="1"> </el-option>
              <el-option label="女" value="2"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-col>
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="生日"
                style="width: 100%"
                value-format="YYYY-MM-DD"
              />
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-input v-model="form.region" placeholder="地区">
              <template #prefix>
                <el-icon>
                  <LocationFilled />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="form.phone" placeholder="手机号">
              <template #prefix>
                <el-icon>
                  <Phone />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submit(), (showInfor = true)"
              >保存</el-button
            >
            <el-button @click="showInfor = true">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <el-main>
      <!-- 粉丝关注人展示 -->
       <router-view>
       </router-view>
      <!-- <follow></follow> -->
    </el-main>
  </el-container>
</template>

<style scoped>
.infor {
  box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);
  display: flex; /* 启用Flexbox布局 */
  flex-direction: column; /* 设置主轴方向为垂直 */
  margin: 2%;
  border-radius: 15px;
  padding: 2%;
}
.name {
  margin-top: 5%;
  margin-left: 1%;
  margin-bottom: 2%;
  font-size: 25px;
}
.showInfor {
  display: flex; /* 启用Flexbox布局 */
  flex-direction: column; /* 设置主轴方向为垂直 */
  /*align-items: center;   /* 项目在交叉轴上居中对齐 */
}
.edit {
  margin-top: 10%;
}
.col {
  /*box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);*/
  position: relative;
  color: rgba(50, 50, 50, 0.845); /* 字体颜色设置为银色 */
  font-family: Arial, sans-serif; /* 字体族设置为Arial或其他无衬线字体 */
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-bottom: 3%;
}
.follow-link {
  position: relative;
  display: flex;
}
.username {
  /*box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);*/
  position: relative;
  color: rgba(86, 85, 85, 0.785); /* 字体颜色设置为银色 */
  font-family: Arial, sans-serif; /* 字体族设置为Arial或其他无衬线字体 */
  display: flex;
  font-size: 22px;
  align-items: center;
}

.HomePage {
  box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);
  position: static;
  margin: 4%;
}
.region {
  /*border: 3px solid #cc7614;*/
  display: flex;
  width: 100%;
}
</style>
