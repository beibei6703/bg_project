<template>
  <div class="wrapper">
    <div class="header_shop">
      <span class="blueColor"><router-link to="role">角色管理</router-link>&nbsp/ </span>
      <span>角色编辑</span>
    </div>
    <div class="shop_info">
      <p class="info_tit">角色基本信息</p>
      <div class="user_one">
        <span class="user_title">名称：</span>
        <el-input
          placeholder="请输入内容"
          v-model="name"
          clearable>
        </el-input>
        <!--<span class="margin_L">{{name}}</span>-->
      </div>
      <p class="info_tit">权限设置</p>
      <!--<div class="radio_box">-->
        <!--<el-radio v-model="radio" label="1">启用</el-radio>-->
        <!--<el-radio v-model="radio" label="2">不启用</el-radio>-->
      <!--</div>-->
      <div class="role_one" v-for ='(items,id) in listInfo' :key="id">
        <el-checkbox-group v-model="checkItem" @change="handleCheckeditems">
          <el-checkbox :label="items.id">{{items.title}}</el-checkbox>
        </el-checkbox-group>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkItem" @change="handleCheckeditemsChange">
          <el-checkbox v-for="item in items.children" :label="item.id" :key="item.id" class="box_child">{{item.title}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="btn">
      <el-button  type="primary" @click="subBtn">提交</el-button>
    </div>
  </div>

</template>
<script>
  import  axios from 'axios'
  import qs from 'qs'
  import {RoleMenus,RoleDetail,RoleEdit} from '../../api/role.js'
  export default{
    name:'roledetail',
    data(){
      return {
        id:'',
        radio:"1",
        rules:[],
        rules1:[],
        listInfo:[],
        value: '',
        name:'',
       checkAll: false,
        checkItem: [],
        checkItem1:[],
        isIndeterminate: true,
        arr:[],
        status:""
      }
    },
    methods: {
      handleCheckeditems(value){
        // console.log(this.checkItem)
      },
      handleCheckeditemsChange(value) {
        // console.log(this.checkItem)
      },
      getdata(){
        //获取全部权限信息
        RoleMenus().then(res=>{
            // console.log(res)
            if(res.data.status==1 && res.data.info){
              var arr = []
              var arr1=[]
                    for (var i in res.data.info) {
                      arr.push(res.data.info[i]); //属性
                    }
              this.listInfo = arr
            }
          })
        const data = qs.stringify({
          id: this.id,
        })
        RoleDetail(data).then(this.getSucc.bind(this))
      },
      getSucc(res){
        // console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
          this.rules = data.info.rules
          this.name = data.info.title
          this.status = data.info.status
          this.rules =  this.rules.map(function(el){return parseInt(el);});
          this.checkItem = this.rules
          // this.checkItem1 = this.rules
         if(this.status == 1){
            this.radio = "1"
         }else{
            this.radio="2"
         }
        }
      },

      subBtn(){
        const data = qs.stringify({
          id: this.id,
          title:this.name,
          // status:this.status,
          rules:this.checkItem
        })
        RoleEdit(data).then(this.subSucc.bind(this))
      },

      subSucc(res){
        // console.log(res)
        const data = res.data
        if(data.status == 1){
          this.getdata()
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'success'
          });
          this.$router.go('-1')
        }else{
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        }
      }
    },
    created(){
      // console.log(this.$route.query.id)
      this.id = this.$route.query.id
      this.getdata()
    },



  }
</script>
<style scoped>
  @import '../../assets/css/shopdetail.css';
  @import '../../assets/css/userdetail.css';
  .user_one>span {
    display: block;
    float: left;
    height: 40px;
    line-height: 40px;
  }
  .radio_box{
    padding: 0 20px 20px 30px;
  }

  .user_one {
    line-height: 30px;
  }
  .role_one{
    margin-bottom:25px;
  }
 .role_one>>>.el-checkbox{
      margin-left:30px;
    }
  .role_one>>>.box_child{
    margin-left:50px;
  }
  .btn{
   margin-top:50px;
    padding-bottom: 50px;
    text-align: center;
  }
  .btn>>>.el-button{
    /*margin-left:100px;*/
    padding: 10px 20px;
  }

</style>

