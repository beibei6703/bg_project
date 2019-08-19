<template>
  <el-container style="min-height: 100%">
    <div class="wraper">
      <p class="accountmange">账号管理</p>
      <div class="con_account">
        <p class="account_det">
          <span>用户名</span>
          <span>{{userInfo.username}}</span>
        </p>
        <p class="account_det">
          <span>手机号</span>
          <span>{{userInfo.mobile}}</span>
        </p>
        <p class="account_det border">
          <span>密码</span>
          <span>********</span>
          <span class="revise" @click="changepsw">修改密码</span>
        </p>
      </div>
      <div class="pswcon" v-if='change'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label ="当前密码" prop="oldpsw">
            <el-input  placeholder="请输入内容" v-model="ruleForm.oldpsw"  type="password"></el-input>

          </el-form-item>
          <el-form-item label ="新密码" prop="newpsw">
            <el-input  placeholder="请输入内容" v-model="ruleForm.newpsw"  type="password"></el-input>
          </el-form-item>
          <!--<div class="safe" refs="safe" style="width:100%">-->
            <!--<p>安全程度</p>-->
            <!--<p><i class="el-icon-error"></i><span>8到20位</span></p>-->
            <!--<p><i class="el-icon-error"></i><span>只能包含大小写字母，数字以及符号（不含空格）</span></p>-->
            <!--<p><i class="el-icon-error"></i><span>大写字母，小写字母，数字，符号至少包含三种</span></p>-->
          <!--</div>-->
          <el-form-item label ="确认密码" prop="newpsw_again">
            <!--<span></span>-->
            <el-input  placeholder="请输入内容" v-model="ruleForm.newpsw_again" type="password" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
          <!--<div class="confimbtn"> <el-button type="primary" plain @click="changeConfirm">确定</el-button></div>-->
        </el-form>
      </div>

    </div>
  </el-container>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  import {AccountDetail,changePsw} from '../../api/login'
  export default{
    name:'accountnum',
    data(){
      //密码验证必须是字母数字特殊符号三种组合
      var validateold =(rules, value, callback) => {
        var regpsw = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W])[\da-zA-Z\W]{8,}/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!regpsw.test(value)) {
          callback(new Error('只能包含大小写字母，数字以及符号'))
        } else {
          callback();
        }
      };
      var validatePass = (rules, value, callback) => {
        var regpsw = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W])[\da-zA-Z\W]{8,}/
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else if (!regpsw.test(value)) {
          callback(new Error('只能包含大小写字母，数字以及符号'))
        } else {
          callback();
        }
      };
      var validatePass2 = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newpsw) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        name:this.$utils.localData.get("name"),
        num:'',
        ruleForm: {
          oldpsw: '',
          newpsw: '',
          newpsw_again: '',
        },

        rules: {
          oldpsw: [
            { required: true, message: '请输入当前密码', trigger: 'blur' },
            { min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' },
//           { validator: validateold, trigger: 'blur' }
          ],
          newpsw: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' },
//          { validator: validatePass, trigger: 'blur' },

          ],
          newpsw_again: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        change:false,
        userInfo:{},

      }
    },
    methods: {
      getdata() {
        AccountDetail() .then(this.getSucc.bind(this))
      },
      getSucc(res) {
        const data = res.data
        if(data.status == 1 && data.info) {
          this.userInfo = data.info
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            const data = qs.stringify({
              old_password: this.ruleForm.oldpsw,
              password: this.ruleForm.newpsw,
              password_confirm: this.ruleForm.newpsw_again
            })
            changePsw(data).then(this.changeSucc.bind(this))

          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changepsw() {
        this.change = !this.change
      },
      changeSucc(res) {
        const data = res.data
        if(data.status == 1 && data.info) {
          this.succeed(res)
          this.$router.push('/home')
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        }
      }
    },
    created() {
      this.getdata()
    }
  }</script>
<style scoped lang="less">
  @import '../../assets/css/psw.css';
  .my-profile a{
    color: #fff;
  }

  .pswcon{
    padding-left:200px;
    .el-input{
      width:300px;
      .el-input__inner {
        height: 30px;
      }
    }
    .el-button{
      margin-top:10px;
      padding:8px 20px;
    }
  }
  .news{
    border:0;
  }

</style>
