<template>
  <div class="wrapper">
    <div class="header_shop">
      <span class="blueColor"><router-link to="role">角色管理</router-link>&nbsp/ </span>
      <span>添加角色</span>
    </div>
    <div class="shop_info">
      <p class="info_tit">权限基本信息</p>
      <div class="user_one">
        <span class="user_title">名称：</span>
        <el-input  placeholder="请输入内容" v-model="name"></el-input>
      </div>
      <!--<div class="user_one">-->
        <!--<span class="user_title">启用：</span>-->
        <!--<el-radio v-model="radio" label="1">是</el-radio>-->
        <!--<el-radio v-model="radio" label="2">否</el-radio>-->
      <!--</div>-->
      <p class="info_tit">权限设置</p>
      <div class="role_one" v-for ='(items,id) in listInfo' :key="id">
        <el-checkbox-group v-model="checkItem" @change="handleCheckeditems">
          <el-checkbox :label="items.id">{{items.title}}</el-checkbox>
        </el-checkbox-group>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkItem" @change="handleCheckeditemsChange">
          <el-checkbox v-for="item in items.children" :label="item.id" :key="item.id" class="box_child">{{item.title}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="btn">
        <el-button type="primary"@click="addRole">添加</el-button>
        <!--<el-button>取消</el-button>-->
      </div>

    </div>
  </div>
</template>

<script>
  import {RoleMenus,RoleAdd} from "../../api/role";
  import qs from 'qs'
    export default {
        name: "addrole",
      data(){
        return{
          name:'',
          status:'',
          radio: '1',
          checkItem:[],
          checkItem1:[],
          listInfo:[],
          arr:[]
        }
      },

      methods:{
        handleCheckeditems(value){
          console.log(this.checkItem)
        },
        handleCheckeditemsChange(value) {
          console.log(this.checkItem)
        },
        getdata(){
          RoleMenus().then(res => {
              console.log(res)
              if (res.data.status == 1 && res.data.info) {
                var arr = []
                for (var i in res.data.info) {
                  arr.push(res.data.info[i]); //属性
                }
                this.listInfo = arr
              }
            })

        },
        addRole(){
          if( this.radio =="1"){
            this.status = 1
          }else{
            this.status = 0
          }

          if(!this.name ==""){
            const data = qs.stringify({
              title:this.name,
              status:this.status,
              rules:this.checkItem
            })

            RoleAdd(data).then(this.addSucc.bind(this))
          }else{
            this.$message({
              showClose: true,
              message: "请输入角色名称",
              type: 'error'
            });
          }
        },
        addSucc(res){
          console.log(res)
          const data = res.data
          if(data.status == 1){
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
            this.$router.push('/role')
          }else{0
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
          }
        }
      },
      created(){
        this.getdata()
      }
    }
</script>

<style scoped>
  @import '../../assets/css/shopdetail.css';
  @import '../../assets/css/userdetail.css';
  .user_one>>>.el-input__inner{
    width:200px;
  }
  .user_one{
    line-height:40px;
  }
  .user_one>>>.el-radio{
    margin-top:8px;
    margin-left:20px;
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
    margin-top:20px;
  }
  .btn>>>.el-button{
    padding: 10px 20px;
    margin-left: 340px;
  }
</style>
