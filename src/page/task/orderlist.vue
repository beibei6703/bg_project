<template>
	<div class="wraper">
		<!-- <div>保证金</div> -->
		<div class="publish-task-top">
			<span>用户任务订单</span>
		</div>
		<div class="drawMoney shopDraw">
			<div class="shopmsg">
				<div class="infos">
					<span>订单ID</span>
					<el-input  placeholder="请输入内容" v-model="order_no"></el-input>
				</div>

				<!--<div class="infos">-->
					<!--<span>商家店铺名称</span>-->
					<!--<el-input  placeholder="请输入内容"></el-input>-->
				<!--</div>-->
        <div class="infos">
          <span>任务标题</span>
          <el-input  placeholder="请输入内容" v-model="title"></el-input>
        </div>
				<div class="infos">
					 <el-button type="primary" plain @click="handleSearch">查找</el-button>
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
			      width="50" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="order_no"
			      label="订单ID"
            width="210"
            align="center"
			     >
			    </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           align="center"
         >
         </el-table-column>
			    <el-table-column
			      label="用户手机号"
            align="center"
           >
            <template slot-scope="scope">
              <el-button @click="getuser(scope.row)" type="text" size="small">{{scope.row.mobile}}</el-button>
            </template>
			    </el-table-column>
			    <el-table-column
			      prop="business_name"
			      label="商家店铺名称" align="center">
			    </el-table-column>
			    <el-table-column
			      label="任务标题" align="center">
            <template slot-scope="scope">
              <el-button @click="gettask(scope.row)" type="text" size="small">{{scope.row.title}}</el-button>
            </template>
			    </el-table-column>
         <el-table-column
           prop="money"
           label="小费金额"
           align="center"
         >
         </el-table-column>
			    <el-table-column
         prop="create_time"
         label="创建时间" width="180" align="center">
       </el-table-column>
         <!--<el-table-column-->
           <!--prop="finish_time"-->
           <!--label="完成时间">-->
         <!--</el-table-column>-->
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
import {OrderList} from  '../../api/task.js'
	export default{
		name:'orderlist',
		data () {
			return{
			  id:'',
        page:1,
        title:'',
        order_no:'',
        list:[],
				  total:0,
        		currentPage: 1,
        		pageSize:0,
        		totalCount:0,
			  	money:'',
			}
		},
		methods:{
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      //条件查找
      handleSearch(){
        if(!this.order_no=='' || !this.title== ''){
          const data = qs.stringify({
            order_no:this.order_no,
            title:this.title
          })
          OrderList(data).then(this.getSucc.bind(this))
        }else{
          this.$message({
            showClose: true,
            message:'请输入查询条件',
            type: 'error'
          });
        }
      },
      handleCurrentChange(val){
        this.page = val
        const data = qs.stringify({
          page: val,
          id:this.id
        })
        OrderList(data).then(this.getSucc.bind(this))
      },
      //页面列表
		  getdata(){
        const data = qs.stringify({
          id:this.id
        })
        OrderList(data).then(this.getSucc.bind(this))
      },
      getSucc(res){
		    console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
		      this.list = data.info.data
          this.total = data.info.total
          this.currentPage = Number(data.info.current_page)
          this.totalCount = data.info.total
          this.pageSize = data.info.per_page
        }else{
		      this.mistake()
        }
      },
      // 用户详情
      getuser(val){
				this.$router.push('/userdetail?id='+val.user_id)
				console.log(val)
			},
    gettask(val){
      this.$router.push('/taskdetail?id='+val.task_id)
    }
		},
    created(){
		  this.getdata()
      this.id = this.$route.query.id
    }

}
</script>
<style scoped>
	@import "../../assets/css/shoplist.css";

</style>
