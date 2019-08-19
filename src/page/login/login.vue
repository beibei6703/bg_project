<template>
  <div class="container">
    <div class="inputTxt">
      <div class="top-login f">
        <span class="backstage">雷雨赚小费系统管理平台</span>
        <!--<router-link to="/register">入驻</router-link>-->
      </div>
      <div class="inputCon">
        <div class="f loginimg">
          <img src="@/assets/image/mobile.png" alt="">
          <el-input
            type="text"
            placeholder="请输入手机号"
            v-model="mobile"
            clearable>
          </el-input>
        </div>
        <div class="f loginimg">
          <img src="@/assets/image/password.png" alt="">
          <el-input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            clearable
            @keyup.enter.native="login"
          >
          </el-input>
        </div>
      </div>
      <!--<div class="forgetCon">-->
        <!--<router-link to="/verifylogin">手机验证登录</router-link>-->
        <!--<span><router-link to="/forgetpsw">忘记密码</router-link></span>-->
      <!--</div>-->
      <div class="btn">
        <el-button @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>


<script>
  import qs from 'qs'
  import {Login } from '../../api/login.js'
  export default {
    name: 'login',
    data() {
      return {
        mobile: '',
        password: '',
        login_type: '1',
      }
    },
    methods: {
      // 登陆
      login() {
        if (!this.mobile == '') {
          var data = qs.stringify({
            username: this.mobile,
            password: this.password,

          })
           Login(data).then(this.checkSucc.bind(this))
        } else {
          this.$message({
            showClose: true,
            message: '手机号不能为空',
            type: 'error'
          });
        }
      },
      checkSucc(res) {
        console.log(res)
        const data = res.data
        if (data.status == 1  && data.info) {
          this.succeed(res)
          // localStorage.setItem("token", data.info.token);
          this.$utils.localData.set("token", data.info.token)
          this.$utils.localData.set("username", data.info.username)
          this.$router.push('/home')
        } else {
          this.mistake(res)
        }
      }
    }
  }

</script>
<style scoped>
  @import "../../assets/css/login.css";
</style>
