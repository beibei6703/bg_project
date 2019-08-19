<template>
  <div class="wraper">
    <!-- <div>保证金</div> -->
    <div class="publish-task-top">
      <span>模板管理</span>
      <el-button @click="temlp_add('add')">新增模板</el-button>
    </div>


    <div class="table_tabs">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="序号"
          width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="template_name"
          label="名称"
          width="130" align="center">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间" align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态" align="center">
          <template slot-scope="scope">
            <el-switch
              :value="scope.row.status"
              v-model="scope.row.status"
              @change="temp_status(scope.row.id,scope.row.status)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="temlp_add(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="temlp_delete(scope.row.id)"  type="text" size="small">删除</el-button>
            <el-button @click="temlp_attr(scope.row.id,scope.row.template_name)"  type="text" size="small">属性</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="模板详情" class="manuscripts" :visible.sync="dialogFormVisible">
      <el-form>
      <el-form-item label="模板名称：">
      <el-input v-model="input" placeholder="请输入模板名称" style="width: 300px;"></el-input>
      </el-form-item>
      <el-form-item label="状态："v-if="status">
      <el-switch
        v-model="value3"
        active-text="启用"
        inactive-text="禁用">
      </el-switch>
      </el-form-item>
        <el-form-item label="默认图片：" class="loadimg">
          <el-upload action="https://upload.qiniup.com"
                     list-type="picture-card"
                     :on-success="handleAvatarSuccess"
                     :file-list="imgs"
                     :data="postData"
                     :limit=1
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="primary" style="text-align: center" @click="submit">提交</el-button>
        </div>

      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  import {TemplateList,
    TemplateStatus,
    TemplateDelete,
    TemplateAdd,
    TemplateDetail,
    TemplateEdit,
    qiniu_cdn_token,
  } from '../../api/template'
  import qs from 'qs'
  export default{
    name:'teplist',
    data () {
      return{
        tableData: [],
        money:'',
        dialogFormVisible:false,
        value3:true,
        input:'',
        status:true,
        temp_id:'',
        img:'',
        imgs:[],
        postData: {
          token: ""
        },
      }
    },
    created(){
      // this.ajax(this.qiniu_cdn_token,null,res => {
      //   this.postData.token = res.data.info
      // })
      qiniu_cdn_token().then(res=>{
        if(res.data.status==1){
          this.postData.token = res.data.info
        }else{
          this.mistake()
        }

      })
      this.information()
    },
    methods:{
      handleAvatarSuccess(res, file) {
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.img = res.key
      },
      information(){

        TemplateList().then(res=>{
          if(res.data.status==1){
            this.tableData=res.data.info
          }else{
            this.mistake(res)
          }
        })
      },
      temp_status(value,lable){
        var status
        lable==true?status=1:status=0;
        var data = qs.stringify({
          status: status,
          id: value
        })

        TemplateStatus(data).then(res=>{
          if(res.data.status==1){
            this.succeed(res)
            this.information()
          }else{
            this.mistake(res)
          }

        })
      },
      //模板删除
      temlp_delete(value){
        var data = qs.stringify({
          id: value
        })

        TemplateDelete(data).then(res=>{
          if(res.data.status==1){
            this.succeed(res)
            this.information()
          }else{
            this.mistake(res)
          }

        })
      },
      temlp_add(value){
        this.dialogFormVisible=true
        if(value=='add'){
          this.status=true
          this.input=''
          this.temp_id=''
          this.imgs=[]
          this.img=''
        }else{
          this.status=false
          var data = qs.stringify({
            id:value
          })

          TemplateDetail(data).then(res=>{
            console.log(res.data.info.id)
              this.input=res.data.info.template_name
              this.temp_id=res.data.info.id
            this.imgs=[{url:this.qiniu_cdn+res.data.info.img}]
            this.img=res.data.info.img
          })

        }
      },
      handleSubSucc(res){
          if(res.data.status==1){
            this.succeed(res)
            this.dialogFormVisible=false
            this.value3=false
            this.input=''
            this.information()
          }else{
            this.mistake(res)
          }
      },
      submit(){
        var status
        this.value3==true?status=1:status=0;
        if(this.status){
          var data = qs.stringify({
            template_name: this.input,
            status:status,
            img:this.img
          })
          // this.temlp_submit(this.template_add,data)
          TemplateAdd(data).then(this.handleSubSucc.bind(this))
        }else{
          var data = qs.stringify({
            template_name: this.input,
            id:this.temp_id,
            img:this.img
          })
          TemplateEdit(data).then(this.handleSubSucc.bind(this))
          // this.temlp_submit(this.template_edit,data)
        }
      },
      temlp_attr(value,lable){
        this.$router.push(
          {
            path: '/tep_attr',
            query: {
              id: value,
              name:lable
            }
          }
        )
      }
    }

  }
</script>
<style scoped>
  @import "../../assets/css/shoplist.css";
  .publish-task-top>>>.el-button{
    float:right;
    margin-right:20px;
    padding:8px 20px;
    margin-top:10px;
  }
</style>
<style>
  .manuscripts .el-dialog{
    width: 33%;
  }
  .manuscripts .el-dialog__body{
    padding: 30px 120px;
  }
</style>
