<template>
  <div class="container">
    <!-- <div>手机验证码登录</div> -->
    <div class="inputTxt">
      <div class="top-login">
        <span class="backstage">管理后台</span>
        <!--<router-link to="/register">入驻</router-link>-->
      </div>
      <div class="inputCon">
        <div class="f">
          <!--<img src="@/assets/image/mobile.png" alt="">-->
          <el-input
            type="number"
            placeholder="请输入手机号"
            v-model="mobile"
            clearable>
          </el-input>
        </div>
      </div>
      <div class="verify f">
        <el-input
          v-model="captcha"
          placeholder="请输入验证码"
          clearable class="input-val">
        </el-input>
        <div class="graphs" >
          <img :src="graph+timestamp" @click="verify"  alt="">
        </div>
      </div>
      <div class="forgetCon">
        <el-input
          placeholder="输入验证码"
          v-model='verify_code'
          @keyup.enter.native="verifylogin"
        >
        </el-input>
        <span class="getYz" @click="getdata"><a href="javascript:;">获取验证码</a></span>
      </div>
      <div class="backlogin">
        <router-link to="/login">密码登录</router-link>
      </div>
      <div class="btn"><el-button @click="verifylogin">登录</el-button></div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name:'verifylogin',
    data(){
      return {
        mobile:'',
        verify_code: '',
        login_type:'2',
        graph:'',
        captcha:'',
        timestamp:'',
        baseURL:this.baseURL
      }
    },
    //获取图形验证码
    created (){
      axios.get(this.graph_verification)
        .then(response=>{
          this.graph=response.data.info
        })
      this.verify()
    },
    methods:{
      // 点击刷新图形验证码
      verify(){
        this.timestamp="?t"+Date.now();
      },
      //  验证码
      getdata() {
        if (!this.captcha == ''&&!this.mobile == '') {
          var data = qs.stringify({
            mobile: this.mobile,
            captcha:this.captcha,
            login_type:'2',
            verify_code: this.verify_code,
          })
          axios.post(this.request_verification, data)
            .then(res=>{
              const data = res.data
              if (data.status == 1) {
                this.$message({
                  message: data.msg,
                  type: 'success'
                });
                var countdown = 60;
                setTime(this)
                function setTime(elem) {
                  if (countdown == 0) {
                    $(".getYz").text("获取验证码")
                    countdown = 60;
                    elem.disabled = false;
                    clearTimeout(anima);
                  } else {
                    countdown--;
                    $(".getYz").text(countdown)
                    elem.disabled = true;
                    var anima = setTimeout(function () {
                      setTime(elem);
                    }, 1000);
                  }
                }

              } else {
                this.$message({
                  showClose: true,
                  message: data.msg,
                  type: 'error'
                });
              }
            })
            // .catch(res=>{
            //   this.mistake(res)
            // })
        } else {
          this.$message({
            showClose: true,
            message: '请输入验证码或手机号',
            type: 'error'
          });
        }
      },
      //  登陆
      verifylogin(){
        var data = qs.stringify({
          mobile: this.mobile,
          login_type:'2',
          verify_code: this.verify_code,
        })
        axios.post(this.index_login, data)
          .then(this.checkSucc.bind(this))
          // .catch(res=>{
          //   this.mistake(res)
          // })
      },

      //登陆成功
      checkSucc(res) {
        const data = res.data
        if (data.status == 1) {
          this.$message({
            showClose: true,
            type: 'success',
            message: '登陆成功'
          });
          localStorage.setItem("mobile", this.mobile);
          localStorage.setItem("token", data.info.token);
          localStorage.setItem("cate", data.info.cate);
          this.$router.push('/home')
        } else {
          this.$message({
            showClose: true,
            message: '手机验证码错误',
            type: 'error'
          });
        }

      },
    },
  }
</script>
<style scoped>
  @import "../../assets/css/login.css";
</style>
