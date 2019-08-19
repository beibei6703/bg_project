<template>
  <el-container>
    <!--顶部-->
    <el-header style="background-color:#86B0F0;" class="nav-top">
      <div style="width: 1200px;margin:0 auto;height: 100%" class="f">
        <router-link v-bind='{to:"/home"}' class="logo">
          <!--<img src="../assets/logo.png" alt="">-->
          雷雨赚小费系统管理平台
        </router-link>
        <div class="nav-right">
          <ul class="f">
            <li >
              <!--<img src="../assets/logo.png" alt="">-->
              <span  style="color:#fff">欢迎！</span>
              <span style="margin-left:2px;color:#fff">{{username}}</span>
             <span class="quit_sp" @click ="quit">退出</span>
            </li>
          </ul>
        </div>
      </div>
    </el-header>

    <el-container style="width: 1200px;margin: 0 auto;background-color:#fff;">
      <!--左侧-->
      <el-aside width="240px" class="left-nav">
        <el-menu v-for="(item, index) in items" :key="item.id" :default-openeds="openeds" :default-active="activeIndex" router >
        <el-submenu :index="index" >
        <template slot="title"><i :class="item.class"></i>{{item.title}}</template>
        <div v-for="children in item.children">
        <el-menu-item :index="children.url" > {{children.title}} </el-menu-item>
        </div>
        </el-submenu>
        </el-menu>
        <!--<el-menu :default-openeds="openeds" :default-active="activeIndex" router>-->
          <!--<el-submenu index="0">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i> 主页</template>-->
            <!--<el-menu-item index="home"> 欢迎页</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>角色管理</template>-->
            <!--<el-menu-item index="role"> 角色管理 </el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="2">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>商家管理</template>-->
            <!--<el-menu-item index="shoplist">商家列表</el-menu-item>-->
            <!--<el-menu-item index="shopcheck"> 待审核</el-menu-item>-->
            <!--<el-menu-item index="shopin">待入住</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="3">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>用户管理</template>-->
            <!--<el-menu-item index="userlist">用户列表</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="4">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>任务管理</template>-->
            <!--<el-menu-item index="tasklist">任务列表</el-menu-item>-->
            <!--<el-menu-item index="orderlist">任务订单列表</el-menu-item>-->
            <!--&lt;!&ndash;<el-menu-item index="orderdispute">任务订单纠纷</el-menu-item>&ndash;&gt;-->
          <!--</el-submenu>-->

          <!--<el-submenu index="5">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>资金管理</template>-->
            <!--<el-menu-item index="deal">交易明细</el-menu-item>-->
            <!--<el-menu-item index="depositcheck">提现待审核</el-menu-item>-->
            <!--<el-menu-item index="deposit">保证金</el-menu-item>-->
            <!--<el-menu-item index="checkaccount">对账账单</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="6">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>营销管理</template>-->
            <!--<el-menu-item index="sales">首页设置</el-menu-item>-->
            <!--&lt;!&ndash;<el-menu-item index="">消息设置</el-menu-item>&ndash;&gt;-->
          <!--</el-submenu>-->
          <!--<el-submenu index="7">-->
          <!--<template slot="title"><i class="el-icon-tickets"></i>账号管理</template>-->
          <!--<el-menu-item index="accountnum">账号列表</el-menu-item>-->
        <!--</el-submenu>-->
          <!--<el-submenu index="8">-->
          <!--<template slot="title"><i class="el-icon-tickets"></i>模板管理</template>-->
          <!--<el-menu-item index="teplist">模板列表</el-menu-item>-->
        <!--</el-submenu>-->
          <!--<el-submenu index="9">-->
            <!--<template slot="title"><i class="el-icon-tickets"></i>菜单管理</template>-->
            <!--<el-menu-item index="menus">菜单列表</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->
      </el-aside>
      <!--右侧-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import qs from 'qs'
import {Menu,Logout} from '../api/layout'
  export default {
    name: 'layout',
    data() {
      return {
        username:this.$utils.localData.get('username'),
        cate: '',
        baseURL: this.baseURL,
        openeds: ['0'],
        // activeIndex: 'home',
        items: ''
      }
    },
    created() {
      Menu() .then(res => {
          if (res.data.status == 1) {
            // console.log(res)
            this.items = res.data.info
            console.log(this.items)
            var arr = []
            for (var i in res.data.info) {
              arr.push(res.data.info[i]); //属性
            }
            this.openeds = [String(arr[0].id)]
            // this.$router.push(arr[0].children[0].url)
          } else {
            this.mistake(res)
          }
        })
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      quit(){
        Logout().then(res=>{
          if(res.data.status==1) {
            this.$utils.localData.remove('token')
            this.$router.push('/')
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
          }else{
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
          }
        })
      }

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home_icon:before,
  .bussiness_icon:before,
  .user_icon:before,
  .account_icon:before,
  .menus_icon:before,
  .money_icon:before,
  .task_icon:before,
  .sales_icon:before,
  .template_icon:before{
    content:'';
    width:16px;
    height:16px;
    margin-top:20px;
    margin-right:8px;
    display: inline-block;
    float:left;
  }
  .home_icon:before{
    background: url(../assets/image/zhuye.png) no-repeat;
    background-size: 100%;
  }
  .bussiness_icon:before{
    background: url(../assets/image/bussiness.png) no-repeat;
    background-size: 100%;
  }
  .account_icon:before{
    background: url(../assets/image/account.png) no-repeat;
    background-size: 100%;
  }
  .user_icon:before{
    background: url(../assets/image/user.png) no-repeat;
    background-size: 100%;
  }
  .task_icon:before{
    background: url(../assets/image/task.png) no-repeat;
    background-size: 100%;
  }
  .template_icon:before{
     background: url(../assets/image/template.png) no-repeat;
     background-size: 100%;
   }
  .menus_icon:before{
    background: url(../assets/image/menus.png) no-repeat;
    background-size: 100%;
  }
  .money_icon:before{
    background: url(../assets/image/money.png) no-repeat;
    background-size: 100%;
  }
  .sales_icon:before{
    background: url(../assets/image/sale.png) no-repeat;
    background-size: 100%;
  }

  .quit_sp{
    font-size:16px;
    margin-left:15px;
    color:#fff;
    cursor: pointer;
  }
  .quit_sp:hover{
    font-size:18px;
    text-decoration: underline;
  }
  .el-menu-item.is-active {
    background-color: #409eff !important;
    color: #fff !important;
  }
  .el-aside{
    background:#fff !important;
  }
  .el-header{
    background-color: #409eff !important;
  }

  .nav-top {
    .logo {
      float: left;
      line-height: 60px;
      color:#fff;
      padding-left:45px;
      background: url(../assets/logo.png) no-repeat left center;
    }
    .nav-right {
      float: right;
      .news {
        background-color: transparent;
        border-left: 0;
        border-top: 0;
        border-bottom: 0;
        font-size: 14px;

      }
      .el-badge__content.is-fixed {
        top: 15px;
      }
      li {
        text-align: center !important;
        height: 60px;
        line-height: 60px;
        float: left;
        .el-button--small {
          width: 104px;
          border-radius: 0;
        }
      }
      .my-profile {
        margin-left: 50px;
        height: 60px;
        line-height: 60px;
        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }

  }

  .left-nav {
    .el-icon-tickets {
      line-height: 56px;
      float: left;
      vertical-align: middle;
    }
    ul > li {
      text-align: left !important;
    }
    ul > li > ul > li {
      padding-left: 60px !important;
    }
  }
</style>
<style>
  .el-submenu__title:hover{
    background-color: transparent !important;
    /*color:#fff;*/
  }
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color:  #409eff !important;
    color:#fff;
  }


  .left-nav{
    /*border-right: 1px solid #e4e7ed !important;*/
  }
</style>
