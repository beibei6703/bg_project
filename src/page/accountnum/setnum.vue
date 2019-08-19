<template>
	<div class="wrapper">
		<div class="header_shop">
			<span class="blueColor"><router-link to="/accountnum">账户管理&nbsp;></router-link> </span>
			<span>设置</span>
		</div>
		<div class="shop_info">
			<p class="info_tit">账号基本信息</p>
			<div class="user_one">
				<span class="user_title">账号：</span>
				<span class="margin_L">{{username}}</span>
			</div>
			<div class="user_one">
				<span class="user_title">手机号：</span>
				<span class="margin_L">{{mobile}}</span>
			</div>
			<div class="user_one">
				<span class="user_title">使用者职位：</span>
        <!--<span class="margin_L">{{worker}}</span>-->
        <el-select v-model="worker" clearable placeholder="请选择" @change="handleChange">
          <el-option
            v-for="item in roles"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
			</div>
			<p class="info_tit">权限设置</p>
			<!--<div class="user_one margin-ch">-->
				<!--<span class="user_title">管理员权限：</span>-->
        <!--<el-radio v-model="radio" label="1">是</el-radio>-->
        <!--<el-radio v-model="radio" label="2">否</el-radio>-->
			<!--</div>-->
      <div class="role_one" v-for ='(items,id) in listInfo' :key="id">
        <el-checkbox-group v-model="checkItem" @change="handleCheckeditems">
          <el-checkbox :label="items.id">{{items.title}}</el-checkbox>
        </el-checkbox-group>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkItem" @change="handleCheckeditemsChange">
          <el-checkbox v-for="item1 in items.children" :label="item1.id" :key="item1.id" class="box_child">{{item1.title}}</el-checkbox>
        </el-checkbox-group>
      </div>

			<!--<p class="info_tit">权限设置</p>-->
			<!--<div class="user_one">-->
				<!--<span class="user_title widths">重置该账号密码：</span>-->
				<!--<el-input  placeholder="请输入内容"></el-input>-->
			<!--</div>-->
			<!---->
			<!--<div class="user_one">-->
				<!--<span class="user_title">确认密码：</span>-->
				<!--<el-input  placeholder="请输入内容"></el-input>-->
			<!--</div>-->

			<div class="btns">
				<el-button type="primary" @click = "handleEdit">保存</el-button>
			</div>
		</div>
	</div>

</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  import {RoleMenus,AccountJob,AccountRules,AccountDetail,AccountEdit} from '../../api/account'
	export default{
		name:'setnum',
		data(){
			return {
        id:'',
        radio:"1",
        rules:[],
        rules1:[],
        listInfo:[],
        value: 1,
        name:'',
        checkAll: false,
        checkItem: [],
        checkItem1:[],
        isIndeterminate: true,
        arr:[],
        roles:[],
        status:'',
        username:'',
        realname:'',
        mobile:'',
        worker:'',
        role_id:''
			}
		},
    methods:{
		  //不同职位获取不同默认权限
      handleChange(value){
        console.log(value)
        this.role_id = value
        const data = qs.stringify({
          id : value
        })
        //根据角色获取权限
        AccountRules(data).then(this.handleRuleSucc.bind(this))
      },
      handleRuleSucc(res){
        console.log(res)
        const data = res.data
        if(data.status ==1 && data.info){
          this.rules = data.info.rules
          this.rules =  this.rules.map(function(el){return parseInt(el);});
          this.checkItem = this.rules
          console.log(this.checkItem)
        }
      },
      handleCheckeditems(value){
        console.log(this.checkItem)
      },
      handleCheckeditemsChange(value) {
        console.log(this.checkItem)
      },
      getdata() {
        // 获取所有的权限菜单
        RoleMenus().then(res=>{
            // console.log(res)
            if(res.data.status==1 && res.data.info){
              var arr = []
              // var arr1=[]
              for (var i in res.data.info) {
                arr.push(res.data.info[i]); //属性
              }
              this.listInfo = arr
            }
          })
        // 获取用户职位
        AccountJob() .then(res=>{
            console.log(res)
            if(res.data.status ==1)[
              this.roles = res.data.info
            ]
          })
        const data = qs.stringify({
          id: this.id
        })
      //账号基本信息
       AccountDetail(data).then(this.getSucc.bind(this))
      },
      getSucc(res) {
        console.log(res)
        const data = res.data
        if(data.status == 1 && data.info) {
          this.username = data.info.username
          this.realname = data.info.realname
          this.mobile = data.info.mobile
          this.worker = data.info.title
          this.status =data.info.status
          this.rules = data.info.rules
          this.role_id = data.info.role_id
          console.log(this.rules)
            this.rules = this.rules.map(function(el){return parseInt(el);});
            this.checkItem = this.rules
          this.checkItem = this.rules
          if(this.status == 1){
            this.radio = "1"
          }else{
            this.radio="2"
          }
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        }
      },

      handleEdit(){
        const data = qs.stringify({
          id:this.id,
          username:this.username,
          realname:this.realname,
          role_id :this.role_id,
          rules:this.checkItem
        })
        // axios({
        //   method: 'post',
        //   url: this.user_edit_port,
        //   data,
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'token': localStorage.getItem("token")
        //   }
        // })
        AccountEdit(data).then(this.handleSucc.bind(this))
      },
      handleSucc(res){
        // console.log(res)
        const data = res.data
        if(data.status ==1){
          this.getdata()
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'success'
          });
          this.$router.push('/accountnum')
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
		   this.id = this.$route.query.id
		  this.getdata()
    }
	}
</script>
<style scoped>
	@import '../../assets/css/shopdetail.css';
	@import '../../assets/css/userdetail.css';
	.identityCon>img {
		width: 83px;
		height: 58px;
		margin-right: 30px;
	}
	.user_one>span {
		display: block;
		float: left;
		height: 40px;
		line-height: 40px;
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
.user_one>>>.el-radio{
  margin-top:8px;
  margin-left:30px;
}
	.user_one {
		line-height: 30px;
	}
	.btns {
		width: 550px;
		margin-top: 30px;
	}
</style>

