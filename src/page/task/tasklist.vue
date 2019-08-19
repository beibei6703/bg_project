<template>
	<div class="wraper">
		<!-- <div>保证金</div> -->
		<div class="publish-task-top">
			<span>任务列表</span>
		</div>
		<div class="drawMoney">
			<div class="shopmsg">
				<div class="infos">
					<span>任务标题</span>
					<el-input  placeholder="请输入内容" v-model="title"></el-input>
				</div>
				<div class="infos">
					<span>商家店铺名称</span>
					<el-input  placeholder="请输入内容" v-model="name"></el-input>
				</div>
        <div class="infos">
          <el-button type="primary" plain @click="handleSearch">查找</el-button>
        </div>
				<div class="infos">
					<span>状态</span>
					 <el-select v-model="value" placeholder="请选择" @change="handleselect">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				</div>

			</div>
		</div>

		<div class="table_tabs">
			 <el-table
			    :data="taskList"
			    border
			    style="width: 100%">
			    <el-table-column
            type="index"
            :index="typeIndex"
			      label="序号"
			      width="80"align="center">
			    </el-table-column>
			    <el-table-column
			      prop="title"
			      label="任务标题" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="business_name"
			      label="商家店铺名称"align="center">
			    </el-table-column>
			    <el-table-column
			      prop="create_time"
			      label="提交时间" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="status"
			      label="状态" align="center" >
			    </el-table-column>
			    <el-table-column
			      label="操作" align="center">
			       <template slot-scope="scope">
			        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
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
import axios from "axios"
import qs from 'qs'
import {TaskList} from '../../api/task.js'
	export default{
		name:'userlist',
		data () {
			return{
			  id:'',
			  page:1,
			taskList:[],
				total:0,
        title:'',
        name:'',
        		currentPage: 1,
        		pageSize:0,
        		totalCount:0,
				money:'',
        status:'',
				  options: [{
		          value: '0',
		          label: '进行中'
		        }, {
		          value: '1',
		          label: '已完成'
		        },{
            value: '2',
            label: '待支付'
          },{
            value: '3',
            label: '已下架'
          }],
		        value: '',
			}
		},
		methods:{
      handleselect(val){
        console.log(val)
       this.status = val
        const data = qs.stringify({
          status:val,
          title:this.title,
          name:this.name,
        })

        TaskList(data).then(this.getSucc.bind(this))
      },
      //查找任务
      handleSearch(){
        if(!this.title =='' || !this.name=='' ){
          const data = qs.stringify({
            title:this.title,
            name:this.name,
            status:this.status
          })

          TaskList(data).then(this.getSucc.bind(this))
        }else{
          this.$message({
            showClose: true,
            message: '请输入查询条件',
            type: 'error'
          });
        }
      },
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      handleCurrentChange(val){
        this.page = val
        const data = qs.stringify({
          page: val,
          id:this.id,
          title:this.title,
           name:this.name,
          status:this.status
        })
        // axios({
        //   method:'post',
        //   url:this.task_list_port,
        //   data,
        //   headers:{
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'token': localStorage.getItem("token")
        //   }
        // })
        TaskList(data) .then(this.getSucc.bind(this))
      },
			  handleClick(row) {
		        console.log(row);
		        this.$router.push('/taskdetail?id='+row.id)
		      },
      getdata(){
        const data = qs.stringify({
          id:this.id
        })
        TaskList(data).then(this.getSucc.bind(this))
      },
      getSucc(res){
        // console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
          this.taskList =data.info.data
          this.total = data.info.total
          this.currentPage = Number(data.info.current_page)
          this.totalCount = data.info.total
          this.pageSize = data.info.per_page
        }

      },
		},
    created(){
		  this.getdata()
      this.id = this.$route.query.id
    }

}
</script>
<style scoped>
	@import "../../assets/css/shoplist.css";
	.drawMoney{
		height:100px;
	}
	.infos>>>.el-button{
		margin-left:60px;
    /*margin-right:150px;*/
	}

</style>
