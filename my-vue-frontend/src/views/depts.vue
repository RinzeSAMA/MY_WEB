<script setup>
import { ref } from 'vue';
import axios from 'axios';

getList()
const str = ref('')/*绑定输入框*/
const list = ref([])/*渲染列表*/

// function addtoList() {
//   list.value.push({
//     isComplete: false,
//     text: str.value
//   })
//   str.value = ''
// }
// /*列表增加一项*/

// function delfromlist(index) {
//   list.value.splice(index, 1)
// }
// /*点击del，删除*/

/*获取服务器部门列表*/
async function getList() {

  const res = await axios({
    url: "http://localhost:8080/depts",
    method: "GET"
  })/*res变量接收查询部门的返回值*/
  list.value = res.data.data
}

/*添加部门*/
async function add() {

  /*发送添加部门请求*/
  await axios({
    url: "http://localhost:8080/depts",
    method: "POST",
    data: {
      dpName: str.value
    }
  })/*添加部门*/

  alert(`添加成功！`)
  getList()/*重新渲染列表*/
}


/*删除部门*/
async function del(index) {
  const resourceId = index;
  const shouldDelete = confirm('您确定要删除这个资源吗？');
  if (!shouldDelete) {
    return;
  }/*点击取消，则不删除*/

  /*发送删除请求*/
  await axios.delete(`http://localhost:8080/depts/${resourceId}`)
    .then(response => {
      if (response.data.code == 0) {
        alert('删除失败！可能为服务器端异常！');
      }
      else {
        alert(`删除成功!`);
      }
    })

  getList()

}
</script>
<template>
  <div class="todo-app">
    <div class="title">部门列表</div>
    <div class="todo-form">
      <input v-model="str" type="text" class="todo-input" placeholder="Add a department" />
      <div @click="add" class="todo-button">Add Department</div>
    </div>

    <div v-for="(item, index) in list" :class="[item.isComplete ? 'completed' : 'item']">
      <div>
        <input v-model="item.isComplete" type="checkbox" />
        <span class="id">{{ item.dpid+" " }}</span>
        <span class="name">{{ item.dpName }}</span>
      </div>

      <div @click="del(item.dpid)" class="del">del</div>
    </div>
  </div>
</template>

<style scoped>
.todo-app {
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: 1%;
  padding-top: 30px;
  width: 98%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 5px;
  opacity: 1;
  background: transparent;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}

.todo-form {
  display: flex;
  margin: 20px 0 30px 20px;
}

.todo-button {
  width: fit-content;
  height: 52px;
  border-radius: 0 20px 20px 0;
  border: 2px solid #ece2e2;
  /*边框*/
  padding: 0px 15px 0px 15px;
  text-align: center;
  background: linear-gradient(to right,
      rgb(113, 65, 168),
      rgba(44, 114, 251, 1));
  color: #fff;
  line-height: 52px;
  cursor: pointer;
  font-size: 2vw;
  user-select: none;

}

.todo-input {
  padding: 0px 15px 0px 15px;
  border-radius: 20px 0 0 20px;
  border: 3px solid #dfe1e5;
  outline: none;
  width: 60%;
  height: 50px;
}

.item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 10%;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  border: 3px solid #ece2e2;
  /*边框*/
  background-color: #dfe1e5;
  opacity: 1;
}

.del {
  color: red;
}

.completed {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  text-decoration: line-through;
  opacity: 0.4;
  border: 3px solid #ece2e2;
  /*边框*/
}

.name{

}
</style>
