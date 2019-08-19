<template>
    <div class="wraper">
      <div class="header_shop">
        <span><router-link to="/sales">广告分类&nbsp;></router-link> </span>
        <span>广告详情</span>
      </div>
      <div class="forms_box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标识" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="位置" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="限制数量" prop="limit">
          <el-input v-model="ruleForm.limit"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择类型" @change="handleChange">
            <el-option label="轮播" value="1"></el-option>
            <el-option label="图片" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" >
          <el-switch v-model="delivery"></el-switch>
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
  import axios from 'axios'
  import qs from 'qs'
  import {adEdit,PlaceDetail} from '../../api/ad'
    export default {
        name: "addetail",
        data(){
              return {
                delivery: true,
                type1:'',
                status:'',
                ruleForm: {
                  name: '',
                  title:'',
                  type:'',
                  limit:'',
                },
                rules: {
                  name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                  ],
                  title: [
                    { required: true, message: '请输入广告位置', trigger: 'blur' },
                  ],
                  limit: [
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
            console.log(val)
          },
          getdata(){
            PlaceDetail(this.id).then(this.getSucc.bind(this))
          },
        getSucc(res){
            console.log(res)
          const data  = res.data
          if(data.status == 1 && data.info){
              this.ruleForm = data.info
            data.info.type=1?this.ruleForm.type="轮播":this.ruleForm.type ="图片"
            switch(this.ruleForm.status){
              case 1:
              this.delivery = true
                    break;
              case 0:
                this.delivery = false
                break;
            }
          }
        },
        //编辑广告
        submitForm(formName) {
            console.log(this.id)
          this.$refs[formName].validate((valid) => {
            if (valid) {
              switch(this.delivery){
                case true:
                  this.status =1
                  break;
                case false:
                  this.status =0
                  break;
              }
              switch(this.ruleForm.type){
                case "轮播":
                  this.ruleForm.type =1
                  break;
                case "图片":
                  this.ruleForm.type =2
                  break;
              }

              const data = {
                id:this.id,
                type:this.ruleForm.type,
                name:this.ruleForm.name,
                title:this.ruleForm.title,
                limit:this.ruleForm.limit,
                status:this.status,
              }

              adEdit(data).then(this.handleSucc.bind(this))
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
          // this.$refs[formName].resetFields();
          this.$router.go(-1)
        }

      },
      created(){
          this.id = this.$route.query.id
        this.getdata()

      }
    }
</script>

<style scoped>
  @import '../../assets/css/shopdetail.css';
  @import '../../assets/css/shoplist.css';

</style>
