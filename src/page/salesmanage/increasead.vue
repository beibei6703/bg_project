<template>
    <div class="wraper">
      <div class="publish-task-top">
      <span>新增广告</span>
      </div>
      <div class="forms_box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名称" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item
            class="loadimg"
            label="背景图片："
            prop="image"
          >
            <el-upload
              action="https://upload.qiniup.com"
              list-type="picture-card"
              :on-success="handleAvatarSuccess"
              :on-preview="handlePictureCardPreview"
              :file-list="fileList"
              :data="postData"
              :limit="1">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="开始时间" prop="create_time">
                <el-date-picker  type="datetime" placeholder="选择日期" v-model="ruleForm.create_time" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间" prop="end_time" >
              <el-date-picker  type="datetime" placeholder="选择时间" v-model="ruleForm.end_time" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="位置" prop="value">
          <el-select v-model="ruleForm.value" placeholder="请选择" @change="getSelect">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="链接" prop="url">
            <el-input type="text" v-model="ruleForm.url"></el-input>
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
  import axios from 'axios'
  import qs from 'qs'
  import bus from '../../bus.js'
  import {AdChoose,AdvertiseAdd,qiniu_cdn_token} from '../../api/ad'
    export default {
        name: "increasead",
        data (){
              return{
                limit:1,
                imgurl:'',
                place_id:'',
                options:[],
                fileList: [],
                dialogImageUrl: '',
                dialogVisible: false,
                postData:{
                  token:""
                },
                ruleForm: {
                  title: '',
                  url:"",
                  create_time:'',
                  end_time:'',
                  delivery: true,
                  value:'',

                },
                rules: {
                  title: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                  ],
                  url: [
                    { required: true, message: '请输入地址url', trigger: 'blur' }
                  ],
                  value: [
                    { required: true, message: '请选择位置', trigger: 'change' }
                  ],
                  create_time: [
                    { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
                  ],
                  end_time: [
                    { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
                  ],



                }
              };

        },
      methods:{
        handledata(res) {
          console.log(res)
          this.ruleForm.value = res

        },

        getSelect(value){
          // console.log(value)
          this.place_id = value
        },
        // 下拉选项
        getChoose(){
          AdChoose().then(this.handleChoose.bind(this))
        },
        handleChoose(res){
          // console.log(res)
          const data = res.data
          if(data.status ==1 && data.info){
            this.options = data.info
            // console.log(this.options)
          }

        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        handleAvatarSuccess(res, file) {   //上传成功后在图片框显示图片
          this.dialogImageUrl = this.qiniu_cdn + res.key
          // localStorage.setItem("idcard_up", res.key);
          this.imgurl = res.key
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

              const data = qs.stringify({
                place_id:this.place_id,
                image:this.imgurl,
                url:this.ruleForm.url,
                begin_time:this.ruleForm.create_time,
                end_time:this.ruleForm.create_time,
                title:this.ruleForm.title,
                status:this.status,
              })
              // console.log(data)
              AdvertiseAdd(data).then(this.handleSucc.bind(this))
            } else {
              // console.log('error submit!!');
              return false;
            }
          });
        },
        handleSucc(res){
          // console.log(res)
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
        }

      },
      created(){
        bus.$on("trandata",this.handledata)
          this.getChoose()
        qiniu_cdn_token().then(res=>{
          this.postData.token=res.data.info
        })


      },
      beforeDestroy(){
        bus.$off("trandata",this.handledata)

      }

    }
</script>

<style scoped>
  @import "../../assets/css/shoplist.css";
</style>
