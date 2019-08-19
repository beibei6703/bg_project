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
        <el-form-item label="开始时间" prop="begin_time">
          <el-date-picker  type="datetime" placeholder="选择日期" v-model="ruleForm.begin_time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="end_time" >
          <el-date-picker  type="datetime" placeholder="选择时间" v-model="ruleForm.end_time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="位置" prop="place_id">
          <el-select v-model="ruleForm.place_id" placeholder="请选择" @change="getSelect">
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
        <el-form-item label="状态">
          <el-switch v-model="delivery" @change="getstatus"></el-switch>
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
  import qs from 'qs'
  import {AdvertiseEdit,AdChoose,AdvertiseSub,qiniu_cdn_token} from '../../api/ad'
  import bus from '../../bus.js'
    export default {
        name: "adedit",
      data (){
        return{
          limit:'',
          id:'',
          imgurl:1,
          place_id:'',
          options:[],
          status:'',
          fileList: [],
          dialogImageUrl: '',
          dialogVisible: false,
          postData:{
            token:""
          },
          delivery: true,
          ruleForm: {
            title: '',
            url:"",
            begin_time:'',
            end_time:'',
            place_id:'',
          },
          rules: {
            title: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
            ],
            url: [
              { required: true, message: '请输入地址url', trigger: 'blur' }
            ],
            place_id: [
              { required: true, message: '请选择位置', trigger: 'change' }
            ],
            begin_time: [
              { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            end_time: [
              { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
            ],
          }
        };

      },
      methods:{
          handledata(res){
            this.limit =res
            comsole.log(this.limit)
          },
        getstatus(status){
            console.log(this.ruleForm.status)
            switch(status){
            case true:
              this.status = 1
              this.delivery = true
              break;
            case false:
              this.status = 0
              this.delivery = false
              break;
          }
          },
        getdata(){
          AdvertiseEdit(this.id) .then(this.getSucc.bind(this))
        },
        getSucc(res){
          console.log(res)
          const data  = res.data
          if(data.status == 1 && data.info){
            this.ruleForm = data.info
            this.imgurl=data.info.image.substring(data.info.image.lastIndexOf("/")+1, data.info.image.length);
             //时间处理格式
            if ((this.ruleForm.begin_time != null && this.ruleForm.begin_time != '') ||(this.ruleForm.end_time != null && this.ruleForm.end_time != '')) {
              this.ruleForm.begin_time = new Date(this.ruleForm.begin_time.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'));
              this.ruleForm.end_time = new Date(this.ruleForm.end_time.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'));
            }
            // console.log( this.ruleForm)
            this.fileList =[{url:this.ruleForm.image}]

            data.info.status==1?this.delivery = true:this.delivery = false;
            data.info.status==1?this.status = 1:this.status = 0;

          }
        },
        getSelect(value){
          console.log(value)
          this.place_id = value
        },
        getChoose(){
          AdChoose().then(this.handleChoose.bind(this))
        },
        handleChoose(res){
          console.log(res)
          const data = res.data
          if(data.status ==1 && data.info){
            this.options = data.info
            // console.log(this.options)
          }

        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {

            if (valid) {
               const data ={
                 id :this.id,
               place_id:this.ruleForm.place_id,
               title:this.ruleForm.title,
               url:this.ruleForm.url,
               image:this.imgurl,
               begin_time:this.ruleForm.begin_time,
               end_time:this.ruleForm.end_time,
               status:this.status,
             }

              AdvertiseSub(data) .then(this.handleSucc.bind(this))
            } else {
              console.log('error submit!!');
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
          // this.$refs[formName].resetFields();
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

      },

        created(){
          this.getChoose()
          // axios.post(this.qiniu_cdn_token, {
          //   headers: {
          //     'Content-Type': 'application/x-www-form-urlencoded'
          //   }
          // })
          qiniu_cdn_token().then(res=>{
            this.postData.token=res.data.info
          })
          this.id = this.$route.query.id
          this.getdata()
          bus.$on("trandata",this.handledata)
        },
      beforeDestroy(){
        bus.$off("trandata",this.handledata)
      }


    }
</script>

<style scoped>
  @import "../../assets/css/shoplist.css";
</style>
