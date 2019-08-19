<template>
	<div class="wrapper">
		<div class="header_shop">
			<span class="blueColor"><router-link to="/userlist">用户列表&nbsp;></router-link> </span>
			<span>用户详情</span>
		</div>
		<div class="shop_info">
			<p class="info_tit">用户基本信息</p>
			<div class="user_one">
				<span class="user_title">姓名：</span>
				<span class="margin_L">{{userInfo.name}}</span>

			</div>
      <div class="user_one">
        <span class="user_title">手机号：</span>
        <span class="margin_L">{{userInfo.mobile}}</span>
      </div>
      <div class="user_one">
        <span class="user_title">性别：</span>
        <span class="margin_L">{{userInfo.gender}}</span>
      </div>
			<div class="user_one">
				<span class="user_title">头像：</span>
				<img :src="userInfo.avatar"/>
			</div>

      <div class="user_one">
        <span class="user_title">出生日期：</span>
        <span class="margin_L">{{userInfo.birthday}}</span>
      </div>
      <div class="user_one">
          <span class="user_title">支付宝账号：</span>
          <span class="margin_L">{{userInfo.alipay}}</span>

      </div>
    <div class="user_one">
      <span class="user_title">可用余额：</span>
      <span class="margin_L">{{userInfo.money}}</span>
    </div>
      <div class="user_one">
          <span class="user_title">身份证号码：</span>
          <span class="margin_L">{{userInfo.idcard}}</span>
          <!--<img :src="userInfo.idcard" alt="" />-->
				<!--<img src="../../assets/logo.png" alt="" />-->
			</div>
      <div class="user_one">
        <span class="user_title">学历：</span>
        <span class="margin_L">{{userInfo.education}}</span>
      </div>
      <div class="user_one">
        <span class="user_title">毕业院校：</span>
        <span class="margin_L">{{userInfo.school}}</span>
      </div>
      <div class="user_one">
        <span class="user_title">所学专业：</span>
        <span class="margin_L">{{userInfo.major}}</span>
      </div>
      <div class="user_one">
        <span class="user_title">email：</span>
        <span class="margin_L">{{userInfo.email}}</span>
      </div>
      <div class="user_one">
      <span class="user_title">QQ：</span>
      <span class="margin_L">{{userInfo.qq}}</span>
    </div>
      <div class="user_one">
        <span class="user_title">微信号：</span>
        <span class="margin_L">{{userInfo.wechat}}</span>
      </div>

		</div>
	</div>

</template>
<script>
  import axios from 'axios'
import {UserDetail} from '../../api/user.js'
  import qs from "qs"
	export default{
		name:'userdetail',
		data(){
			return {
			  id:'',
        userInfo:{},
				 options: [{
		          value: '选项1',
		          label: '店铺基本信息'
		        }, {
		          value: '选项2',
		          label: '身份信息'
		        }, {
		          value: '选项3',
		          label: '全部'
		        }],
		        value: ''
			}
		},
    methods:{

		  getdata(){
		    const data = qs.stringify({
          id:this.id,
        })
        UserDetail(data).then(this.getSucc.bind(this))
          .catch((err)=>{
            console.log(err)
          })
      },
      getSucc(res){
		    console.log(res)
        const data = res.data
        if(data.status ==1 && data.info){
		      this.userInfo = data.info
          switch(data.info.gender){
            case 1:
              this.userInfo.gender = '男'
              break;
            case 2:
              this.userInfo.gender = '女'
              break;
          }
        }
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
	@import '../../assets/css/userdetail.css';
</style>
<style>
.el-select-dropdown{
    	margin-left:20px;
    }

</style>
