<template>
	<div class="wraper">
		<!-- <div>保证金</div> -->
		<div class="publish-task-top">
			<span>用户列表</span>
		</div>
		<div class="drawMoney shopDraw">
			<div class="shopmsg">
				<div class="infos">
					<span>手机号</span>
					<el-input  placeholder="请输入内容" v-model="mobile"></el-input>
				</div>

				<div class="infos">
					 <el-button type="primary" plain @click="getSelect">查找</el-button>
				</div>
			</div>
		</div>

		<div class="table_tabs">
			 <el-table
			    :data="list"
			    border
			    style="width: 100%">
			    <el-table-column
            type="index"
            :index="typeIndex"
			      label="序号"
			      width="80"  align="center">
			    </el-table-column>
			    <el-table-column
			      prop="mobile"
			      label="手机号"
			      width="160" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名" align="center">
			    </el-table-column>
         <el-table-column
           prop="create_time"
           label="注册时间" align="center">
         </el-table-column>
         <el-table-column
           prop="status"
           label="状态" align="center">
           <template slot-scope="scope">
             <el-switch
               :value="scope.row.status"
               v-model="scope.row.status"
               @change="handleChangeStatus(scope.row.id,scope.row.status)"
             >
             </el-switch>
           </template>
         </el-table-column>
			    <el-table-column
			      label="操作" align="center">
			      <template slot-scope="scope">
			        <el-button @click="getdetail(scope.row)" type="text" size="small">查看详情</el-button>
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
  import qs from "qs"
  import {UserList,UserEdit} from '../../api/user.js'
	export default{
		name:'userlist',
		data () {
			return{
			  mobile:'',
			  page:1,
			   list:[],
				    total:0,
        		currentPage: 1,
        		pageSize:0,
        		totalCount:0,
				    money:'',
		        value: '',
			}
		},
		methods:{
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      //手机号搜索
      getSelect(){
        if(!this.mobile ==''){
          const data = qs.stringify({
            mobile:this.mobile
          })
          UserList(data).then(this.getSucc.bind(this))
        }else{
          this.$message({
            showClose: true,
            message:'请输入手机号',
            type: 'error'
          });
        }
      },
      // getSelectSucc(res){
      //   console.log(res)
      // },
      //用户编辑
      handleChangeStatus(value,label){
        // console.log(value+"..."+label)
        var status
        label==true?status=1:status=0;
        const data = qs.stringify({
          status: status,
          id: value
        })
        UserEdit(data).then(this.handleEditSucc.bind(this))

      },

      handleEditSucc(res){
        console.log(res)
        const data = res.data
        if(data.status ==1){
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
      handleCurrentChange(val){
        this.page = val
        const data = qs.stringify({
          page: val,
        })
        UserList(data).then(this.getSucc.bind(this))
          .catch(err=>{
            console.log(err)
          })

      },
      //获取用户列表
      getdata(){
        UserList().then(this.getSucc.bind(this))
          .catch(err=>{
            console.log(err)
          })
      },
      getSucc(res){
        console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
          this.list =data.info.data
          for(var i=0;i<this.list.length;i++){
            switch(this.list[i].status){
              case 1:
                this.list[i].status = true;
                break;
              case 0:
                this.list[i].status = false;
                break;
            }
          }
          this.total = data.info.total
          this.currentPage = Number(data.info.current_page)
          this.totalCount = data.info.total
          this.pageSize = data.info.per_page
        }

      },
      getdetail(val){
        console.log(val)
				this.$router.push('/userdetail?id='+val.id)
			}
		},
		created(){
		  this.getdata()
    }

}
</script>
<style scoped>
	@import "../../assets/css/shoplist.css";


</style>
