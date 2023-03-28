<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="60px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
// import axios from "axios";

// import {store} from "@/assets/store";

export default {
  name: "Login",
  computed: {
    // store() {
    //   return store
    // }
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {
    console.log(import.meta.env.BASE_URL)
  },
  methods: {
    submitForm() {
      console.log(this.loginForm)
      // request(`/service1`,null,'GET').then((res) => {
      // request(`/service1`,null,'GET').then((res) => {
      this.$axios.post('/login/login', this.loginForm).then(res=>{
        console.log(res)
        localStorage.setItem('token',res.data)
        this.$router.push('/home')
      })

    },
    resetForm() {
      this.loginForm.password = ''
      this.loginForm.username = ''
    }
  }
}
</script>

<style scoped lang="less">

.el-form {
  //width: 400px;
  //border: 1px solid black; /* 添加边框 */

}

.login-container {
  background-color: skyblue;
  width: 400px;
  //height: 400px;
  border: 2px solid #ccc;
  //padding: 10px;
  border-radius: 5px;
  padding: 30px;
}

</style>