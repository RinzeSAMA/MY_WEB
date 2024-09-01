<script setup>
import { ref,computed } from "vue";
import { ElMessageBox, ElAlert, ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
defineProps(["userImage"]);

var isConfirmed;
const router = useRouter();
const store = useStore()
const headers = computed(() => {
  const token = localStorage.getItem('token') || '';
  return { token: token };
});
async function beforeAvatarUpload(rawFile){
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("图片必须是jpg格式!"); //图片必须是jpg格式
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  await confirmAndProcess()
  console.log(isConfirmed)
  return isConfirmed;
};

async function confirmAndProcess() {
  try {
    // 等待用户确认或取消
    await ElMessageBox.confirm("确认以此图片作为头像吗？", "Warning", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    });

    // 用户点击了确认
    ElMessage.success("操作已确认");
    isConfirmed = true;
    console.log(isConfirmed); // 这里将打印 true
  } catch (error) {
    // 用户点击了取消或关闭了对话框
    ElMessage.info("操作已取消");
    isConfirmed = false;
    console.log(isConfirmed); // 这里将打印 false
  }
}

const handleAvatarSuccess = (response) => {
  if (response.code == 1) {
    //调用更新函数
    console.log(response.data);
    updateAvatar(response.data);
    //alert("走到这里了");  
    //router.go(0)
  }
};

//更新头像
async function updateAvatar(Image) {
  await axios({
    url: `http://localhost:8080/users`,
    method: "PUT",
    data: {
      id: jwtDecode(localStorage.getItem("token")).id,
      image: Image,
    },
  })
  .then(response=>{
    if(response.data.code==1){
      store.commit('set', Image)
      console.log(store.state.avatar)
      alert('已执行')
    }
  })
}


</script>

<template>
  <el-upload
    class="avatar-uploader"
    action="http://localhost:8080/upload"
    :show-file-list="false"
    method="POST"
    :before-upload="beforeAvatarUpload"
    :on-success="handleAvatarSuccess"
    name="image"
    :headers="headers"
  >
    
    <el-tooltip content="点击更换头像" effect="customized">
      <el-avatar v-if="userImage" :src="userImage" :size="250" class="avater"/>
  
      <el-icon v-else class="avatar-uploader-icon"
        ><Plus/></el-icon
      >
    </el-tooltip>
  </el-upload>
</template>

<style>
.el-icon.avatar-uploader-icon {
  font-size: 20px;
  color: #8c939d;
  width: 250px;
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column; /* 设置主轴方向为垂直 */
  box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);
  margin: 2%;
}
.avater {
  background-color: #ffff;
  box-shadow: 1px 1px 12px 2px rgba(140, 141, 141, 0.493);
  margin-bottom: 5%;
}
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
