<script setup>
import { ref } from "vue";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const user = jwtDecode(localStorage.getItem("token"));
const list = ref([
]); /*渲染关注者列表*/

async function unfollow() {
    
}
async function getFollowing() {
  await axios({
    url: `http://localhost:8080/following/${user.id}`,
    method: "GET",
  }).then((response) => {
    if (response.data.code == 1) {
      list.value = response.data.data
    }
  });
}
console.log(user)
getFollowing()
</script>

<template>
  <el-scrollbar height="600px">
    <div class="follow">
        <span class="title">只展示最近2000名关注者</span>
      <div v-for="(item, index) in list" class="item">
        <el-avatar :src="item.image" :size="60" class="avater" />
        <div class="infor">
          <span class="name">{{ item.name + " " }}</span>
          <span class="region" v-if="item.region">
            <el-icon>
              <LocationFilled />
            </el-icon>
            {{ item.region }}
          </span>
        </div>

        <el-button
          @click="unfollow()"
          type="info"
          plain
          class="cancel-button"
          >取消关注</el-button
        >
      </div>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.title{
    display: block;
   text-align: center;
}
.follow {
  box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);
  margin: 1%;
}
.item {
  box-sizing: border-box;
  display: flex;
  width: auto;
  height: 110px;
  margin: 8px auto;
  padding: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  border: 3px solid #ece2e2;
  position: relative;
  /*边框*/
  border-bottom: 1px solid rgba(0, 0, 0, 0.402); /* 设置底部边框为1像素的实线，颜色为黑色 */
  border-top: 0; /* 上边框宽度设置为0，使其透明 */
  border-left: 0; /* 左边框宽度设置为0，使其透明 */
  border-right: 0; /* 右边框宽度设置为0，使其透明 */
  opacity: 1;
}
.infor {
  display: flex;
  flex-direction: column; /* 子元素沿着垂直方向排列 */
}
.name {
  margin-left: 20px;
  margin-top: 4px;
  font-size: 15px;
}
.region {
  margin-left: 20px;
  margin-top: 15px;
  font-size: 13px;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
}
.cancel-button {
  margin-left: auto;
  margin-top:4px;
}
</style>
