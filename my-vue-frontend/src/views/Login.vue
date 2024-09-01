<script setup>
import { reactive,onMounted,ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { jwtDecode } from "jwt-decode"
/********************************************************/
/*声明域*/
const user = ref('')
const pass = ref('')
const router = useRouter()
let change = ref(true)
const verKey = ref('')
const verCode = ref('')
const inputCode = ref('')

const registerForm = reactive({
  username:'',
  password:'',
  confirm:'',
})/*注册表单*/

const options = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: { // 开启鼠标点击的效果
        enable: true,
        mode: 'push'
      },
      onHover: { // 开启鼠标悬浮的效果(线条跟着鼠标移动)
        enable: true,
        mode: 'grab'
      },
      resize: true
    },
    modes: { // 配置动画效果
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      grab: {
        distance: 200,
        duration: 0.4
      },
      attract: { // 鼠标悬浮时，集中于一点，鼠标移开时释放产生涟漪效果
        distance: 200,
        duration: 0.4,
        factor: 5
      }
    }
  },
  particles: {
    color: {
      value: '#BA55D3' // 粒子点的颜色
    },
    links: {
      color: '#FFBBFF', // 线条颜色
      distance: 150,//线条距离
      enable: true,
      opacity: 0.4, // 不透明度
      width: 1.2 // 线条宽度
    },
    collisions: {
      enable: true
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 0.5, // 移动速度
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 80//粒子数
    },
    opacity: {//粒子透明度
      value: 0.7
    },
    shape: {//粒子样式
      type: 'star'
    },
    size: {//粒子大小
      random: true,
      value: 3
    }
  },
  detectRetina: true
}
/*******************************************************************/
/*预加载区*/

getVercode()

/*******************************************************************/

/*异步函数区,用于请求数据************************/
/*登录*/
async function login(){
  await axios({
    url:"http://localhost:8080/login",
    method:"POST",
    data:{
      username: user.value,
      password: pass.value
    }
  })
  .then(response=>{
    if(response.data.code==1){
      localStorage.setItem("token",response.data.data)
      console.log(localStorage.getItem("token"))
      alert('登录成功')
      router.push('/home');
    }
    else{
      alert('登录失败！用户名或密码不正确');
    }
  })
  .catch(error=>{
    if(error.message == 'Network Error'){
        alert('网络异常！请联系服务器端!');
    }
  })
}

/*获取验证码*/
async function getVercode() {
  const res = await axios({
    url:"http://localhost:8080/captcha/get",
    method:'GET',
  })
  verKey.value = res.data.data.verKey
  verCode.value = res.data.data.verCode
}

/*校验验证码*/
async function check() {
  const res = await axios({
    url:"http://localhost:8080/captcha/check",
    method:"POST",
    data: {
      key: verKey.value,
      inputCode: inputCode.value
    }
  })
  return res.data.code/*返回1，校验正确；0，校验错误*/
}

/*注册*/
async function register() {

  if(registerForm.username==""||registerForm.password==""||registerForm.confirm==""){
      alert('请填写完整！')
      return
    }

  if(registerForm.password!=registerForm.confirm){
    alert('两次密码不一致！')
    return
  }

  const isCheck = await check();/*等待校验验证码结果*/
  if(isCheck==0){
    alert('验证码错误！请检查是否填写正确')
    return
  }
  if(isCheck==1){
    await axios({
    url:"http://localhost:8080/register",
    method:"POST",
    data:{
      username:registerForm.username,
      password:registerForm.password,
    }
  }).then(response=>{
    if(response.data.code==1){
      alert('注册成功！')
    }
    else{
      alert('注册失败！')
    }
  })
  }
}
/*********************************************/

/*函数区*********/

/*切换到注册页面*/
function ToRegister(){
    change.value = false
    // alert('切换到注册的方法已执行')
}

/*切换到登录页面*/
function ToLogin(){
    change.value=true
    // alert('切换到登录的方法已执行')
}

/*登录逻辑*/
async function SubmitofLogin(){
  if(user.value==""){
    alert('用户名不能为空')
    return
  }
  if(pass.value==""){
    alert('密码不能为空')
    return
  }
  if(inputCode.value==""){
    alert('验证码不能为空')
    return
  }
  const isCheck = await check();
  if(isCheck==0){
    alert('验证码错误！请检查是否填写正确')
    return
  }
  if(isCheck==1){
    login()
  }
}

/*********************************************************************/
</script>

<template>

  <div class="login"> 

    <Particles
    id="tsparticles" 
    class="login__particles"
    :options="options"
    />
 
    <div class="loginPart" v-if="change==true">
        <h2>用户登录</h2>
        <el-form 
        ref="ruleFormRef"
        label-width="100px"
        class="demo-ruleForm"
        style="transform:translate(-30px);"
        >
            <el-form-item label="账号：" prop="account">
                <el-input v-model="user" placeholder="请输入账号" maxlength="20" clearable />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="pass" type="password" placeholder="请输入密码" maxlength="20" show-password clearable />
            </el-form-item>
            <el-form-item label="验证码：" prop="verifyCode" class="vercode">
                <el-input v-model="inputCode" style="width: 150px;" placeholder="请输入验证码" maxlength="5" clearable />
                
                <div class="vercodeImg" @click="getVercode">
                  <el-image class="img" width="140px" height="48px" :src="verCode"/>
                </div>
                
            </el-form-item>
            
            <el-button @click="SubmitofLogin()" class="btn" type="primary">登录</el-button>
            <div style="text-align: right;transform:translate(0,30px);">
                <el-link v-on:click="ToRegister" type="warning" style="color: crimson;">没有账号？去注册</el-link>
            </div>
        </el-form>
    </div>

    <div class="loginPart" v-if="change==false">
      <h2>用户注册</h2>
      <el-form 
      ref="ruleFormRef"
      label-width="100px"
      class="demo-ruleForm"
      style="transform:translate(-30px);"
      >
          <el-form-item label="请输入账号名：" prop="account" class="label">
              <el-input v-model="registerForm.username" placeholder="请输入账号" maxlength="20" clearable />
          </el-form-item>
          <el-form-item label="请输入您的密码：" prop="password">
              <el-input v-model="registerForm.password" type="password" placeholder="请输入密码" maxlength="20" show-password clearable />
          </el-form-item>
          <el-form-item label="确认您的密码：" prop="password">
            <el-input v-model="registerForm.confirm" type="password" placeholder="确认密码" maxlength="20" show-password clearable />
          </el-form-item>
          <el-form-item label="验证码：" prop="verifyCode">
              <el-input v-model="inputCode" style="width: 150px;" placeholder="请输入验证码" maxlength="5" clearable />
              <div class="vercodeImg" @click="getVercode">
                <el-image class="img" width="140px" height="48px" :src="verCode"/>
              </div>
          </el-form-item>
          <el-button @click="register()" class="btn" type="primary">注册</el-button>
          <div style="text-align: right;transform:translate(0,30px); ">
              <el-link v-on:click="ToLogin" type="warning" style="color: crimson;">已有账号？ 返回登录</el-link>
          </div>
      </el-form>
  </div>
</div>
</template>

<style scoped>
@import '../css/login.css';
</style>