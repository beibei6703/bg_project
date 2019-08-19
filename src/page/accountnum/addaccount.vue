<template>
	<div class="wrapper">
		<div class="header_shop">
      <span class="blueColor"><router-link to="/accountnum">账户管理&nbsp;></router-link> </span>
			<span>添加账号</span>
		</div>
		<div class="shop_info">
			<p class="info_tit">账号基本信息</p>
      <div class="forms">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="初始密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认初始密码" prop="password_confirm">
          <el-input type="password"  v-model="ruleForm.password_confirm"></el-input>
        </el-form-item>
        <el-form-item label="使用者" prop="realname">
          <el-input v-model="ruleForm.realname"></el-input>
        </el-form-item>
        <el-form-item label="使用者职位" prop="value">
          <el-select v-model="ruleForm.value"  clearable placeholder="请选择" @change="handleChange">
            <el-option
              v-for="item in roles"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
        </el-form>
      </div>

		</div>
	</div>

</template>
<script>
  import qs from 'qs'
  import {AccountRules,AccountAdd,AccountJob,RoleMenus} from '../../api/account'
	export default{
		name:'addaccount',
		data(){
      var validatePass2 = (rules, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
			return {
			  roles:[],
        listInfo:[],
        checkAll: false,
        checkItem: [],
        checkItem1:[],
        role_id:'',
        isIndeterminate: true,
        arr:[],
        getrules:[],
        ruleForm: {
			    value:'',
          username: '',
          password:'',
          password_confirm:'',
          realname:'',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户账号', trigger: 'blur'},
            // {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入初始密码', trigger: 'blur'},
            // {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'}
          ],
          password_confirm: [
            {required: true, message: '请再次输入初始密码', trigger: 'blur'},
            { validator: validatePass2, trigger: 'blur' }

          ],
          realname: [
            {required: true, message: '请输入使用者姓名', trigger: 'blur'},
            // {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'}
          ],
          value: [
            { required: true, message: '请选择职位', trigger: 'change' }
          ],

        },
				 radio: '1',
				 options: [{
		          value: '选项1',
		          label: '店铺基本信息'
		        }],
		        value: '',

			}
		},
    methods:{
      handleCheckeditems(value){
        console.log(this.checkItem)
      },
      handleCheckeditemsChange(value) {
        console.log(this.checkItem)
      },
      //不同职位获取默认权限
      handleChange(value){
        console.log(value)
        this.role_id = value
        const data = qs.stringify({
          id : value
        })
        AccountRules(data) .then(this.handleRuleSucc.bind(this))
      },
      handleRuleSucc(res){
        console.log(res)
        const data = res.data
        if(data.status ==1 && data.info){
          this.getrules = data.info.rules
          this.getrules =  this.getrules.map(function(el){return parseInt(el);});
          this.checkItem = this.getrules
          console.log(this.checkItem)
        }
      },
      //添加账号
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           const data = qs.stringify({
             username:this.ruleForm.username,
             password:this.ruleForm.password,
             password_confirm:this.ruleForm.password_confirm,
             realname:this.ruleForm.realname,
             role_id:this.role_id,
             rules:this.checkItem
           })
            AccountAdd(data).then(this.handleAddSucc.bind(this))
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleAddSucc(res){
        console.log(res)
        const data = res.data
        if(data.status ==1){
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'success'
          });
          this.getdata()
          this.$router.push('/accountnum')
        }else{
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
    },

      getdata(){
        // 获取所有的权限列表菜单
        RoleMenus() .then(res=>{
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
        // 获取用户职位 下拉框职位展示信息
        AccountJob() .then(res=>{
            console.log(res)
            if(res.data.status ==1)[
              this.roles = res.data.info
              // console.log(res.data.info)
            ]
          })
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
	.identityCon>img{
		width:83px;
		height:58px;
		margin-right: 30px;
	}
  .user_one>>>.el-radio{
    margin-top:8px;
    margin-left:30px;
  }

	.forms>>>.el-input{
    width:400px;
  }
	.btns>>>.el-button{
		margin-left:50px;
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
	.btns{
		width:550px;
		margin-top:30px;
	}
	.btns>>>.el-button{
		margin-left:50px;
	}
</style>
