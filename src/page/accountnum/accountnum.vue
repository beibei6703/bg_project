<template>
  <div class="wraper">
    <!-- <div>保证金</div> -->
    <div class="publish-task-top">
      <span>账号管理</span>
      <el-button @click="handleAdd">添加账号</el-button>
    </div>

    <div class="table_tabs">
      <el-table
        :data="userlist"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          :index="typeIndex"
          label="序号"
          width="80" align="center">
        </el-table-column>

        <el-table-column
          prop="username"
          label="账号"
          width="130" align="center">
        </el-table-column>
        <el-table-column
          prop="realname"
          label="使用者" align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          label="使用者职位" align="center">
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="status"-->
          <!--label="权限">-->
        <!--</el-table-column>-->
        <el-table-column
          label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handledele(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
         layout=" total, prev, pager, next, jumper"
        background
        　:total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import {AccountDelete,AccountList} from '../../api/account.js'
	export default{
		name:'accountnum',
		data () {
			return{
        total:0,
        currentPage: 1,
        pageSize:0,
        totalCount:0,
				money:'',
        userlist:[],
        page:1,

			}
		},
		methods:{
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      //编辑跳砖
			handleClick(row){
        this.$router.push('/setnum?id='+row.id)
				// this.$router.push('/setnum')
			},
      //删除
      handledele(row){
      // console.log(row)
        const data= qs.stringify({
          id:row.id
        })
        AccountDelete(data) .then(this.handleDeletSucc.bind(this))
      },
      handleDeletSucc(res){
        console.log(res)
        const data = res.data
        if(data.status == 1){
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'success'
          });
          this.getdata()
        }else{
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        }
      },

			handleAdd(){
				this.$router.push('/addaccount')
			},
      //分页
      handleCurrentChange(val){
        this.page = val
        console.log(val)
        const data = qs.stringify({
          page: val,
        })
        AccountList(data).then(this.getSucc.bind(this))
      },
			//账号列表
      getdata(){
        AccountList() .then(this.getSucc.bind(this))
      },
      getSucc(res){
			  console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
          this.userlist = data.info.data
          this.total = data.info.total
          this.currentPage = Number(data.info.current_page)
          this.totalCount = data.info.total
          this.pageSize = data.info.per_page
        }
      }
		},
    created(){
		  this.getdata()
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
