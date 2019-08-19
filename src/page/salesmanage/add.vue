<template>
    <div class="wraper">
      <div class="header_shop">
        <span class="blueColor"><router-link to="sales">广告分类</router-link>&nbsp/ </span>
        <span>添加广告</span>
      </div>
      <div class="forms_box">


      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标识" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="位置" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="限制数量" prop="limitNum">
          <el-input v-model="ruleForm.limitNum"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="limitNum">
        <el-select v-model="ruleForm.type" placeholder="请选择类型" @change="handleChange">
          <el-option label="轮播" value="1"></el-option>
          <el-option label="图片" value="2"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">返回</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
</template>

<script>
  import qs from "qs"
  import {PlaceList,PlaceAdd} from '../../api/ad.js'
    export default {
        name: "add",
      data(){
          return{
            type1:'',
            status:'',
            ruleForm: {
              name: '',
              title:'',
              type:'',
              delivery: true,
              limitNUm:'',

            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              title: [
                { required: true, message: '请输入广告位置', trigger: 'blur' },
              ],
              limitNum: [
                { required: true, message: '请输入限制数量', trigger: 'blur' },
              ],
              type: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
            }
          }
      },
      methods:{
        handleChange(val){
          // console.log(val)
          console.log(this.ruleForm.type)

        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              switch(this.ruleForm.delivery){
                case true:
                  this.status =1
                  break;
                case false:
                  this.status =0
                  break;
              }
              const data ={
                type:this.ruleForm.type,
                name:this.ruleForm.name,
                title:this.ruleForm.title,
                limit:this.ruleForm.limitNum,
                status:this.status,
              }
              PlaceAdd(data) .then(this.handleSucc.bind(this))
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        handleSucc(res){
          console.log(res)
          const data = res.data
          if(data.status==1){
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
            this.$router.go(-1)
          }else{
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
          }
        },
        resetForm(formName) {
          this.$router.go(-1)
          // this.$refs[formName].resetFields();
        }

      }
    }
</script>

<style scoped>
  @import '../../assets/css/shopdetail.css';
  @import "../../assets/css/shoplist.css";
</style>

