<template>
	<div class="wraper">
		<!-- <div>保证金</div> -->
		<div class="publish-task-top">
			<span>商家列表</span>
		</div>
		<div class="drawMoney ">
			<div class="shopmsg f">
				<div class="infos">
					<span>手机号：</span>
					<el-input v-model="mobile"  placeholder="请输入内容"></el-input>
				</div>
        <div class="infos">
          <span>店铺名称：</span>
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
				<div class="infos">
					<span>类型：</span>
					 <el-select v-model="cate_id" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				</div>
				<div class="infos">
					 <el-button @click="seek"  plain>查找</el-button>
				</div>
			</div>
		</div>

		<div class="table_tabs">
			 <el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
            type="index"
            :index="typeIndex"
			      label="序号"
			      width="50" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="店铺名称"
            width="150"
            align="center"
			      >
			    </el-table-column>
			    <el-table-column
			      prop="mobile"
			      label="手机号"
            width="130"  align="center">
			    </el-table-column>
			    <el-table-column
			      prop="cate_id"
			      label="类型" align="center">
			    </el-table-column>
         <el-table-column
           prop="task_count"
           label="任务数量" align="center">
           <template slot-scope="scope">
           <a style="display: block" href="javascript:;" @click="task(scope.row.id)">{{scope.row.task_count}}</a>
           </template>
         </el-table-column>
         <el-table-column
           prop="order_count"
           label="订单数量" align="center">
           <template slot-scope="scope">
             <a style="display: block" href="javascript:;" @click="order(scope.row.id)">{{scope.row.order_count}}</a>
           </template>
         </el-table-column>
         <el-table-column
           prop="realname"
           label="审核者" align="center">
         </el-table-column>
         <el-table-column
           prop="audit_time"
           label="审核时间"
         width="100" align="center">
         </el-table-column>
			    <el-table-column
			      prop="address"
			      label="操作" align="center">
			       <template slot-scope="scope">
               <el-switch
                 v-model="scope.row.status"
                 @change="status(scope.row)"
               >
               </el-switch>
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
  import qs from 'qs'
  import { BussinessList,BussinessEdit,BussinessCate} from "../../api/shop"
	export default{
		name:'shoplist',
		data () {
			return{
				tableData: [],
				money:'',
        options: [],
        name:'',
        mobile:"",
        cate_id:'',
        page:1,
			}
		},
    created(){
      this.information()
      BussinessCate().then(res=>{
        if(res.data.status==1){
          this.options=res.data.info
        }else{
          this.mistake(res)
        }

      })
    },
		methods:{
		  task(id){
        this.$router.push({path: '/tasklist', query: {id: id}});
      },
      order(id){
        this.$router.push({path: '/orderlist', query: {id: id}});
      },
		  seek(){
        if(!this.name==''||!this.mobile==''||!this.cate_id==''){
          const data = qs.stringify({
            name: this.name,
            mobile:this.mobile,
            cate_id:this.cate_id,
          })

          BussinessList(data).then(res=>{
            // console.log(res)
            // const data = res.data
            if(res.data.status ==1){
              this.tableData = res.data.info.data
              for(var i=0;i<this.tableData.length;i++) {
                this.tableData[i].status == 1 ? this.tableData[i].status = true : this.tableData[i].status = false;
              }
              this.page_fun(res)
              this.succeed(res)
            }else{
              this.mistake(res)
            }


              })

        }else{
          this.$message({
            showClose:true,
            message: '请输入查找内容',
            type: 'error'
          });
        }

      },
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      information(){
        // this.ajax(this.business_list,null,
        BussinessList().then(res=>{
          if(res.data.status==1){
            this.tableData=res.data.info.data
            for(var i=0;i<this.tableData.length;i++){
              this.tableData[i].status==1?this.tableData[i].status=true:this.tableData[i].status=false;
            }
            this.page_fun(res)
          }else{
            this.mistake(res)
          }
        })
      },
      //分页
      handleCurrentChange(val){
        this.page = val
        const data = qs.stringify({
          name: this.name,
          mobile:this.mobile,
          cate_id:this.cate_id,
          page: val,
        })
        // this.ajax(this.business_list,data,
        BussinessList(data).then( res=>{
          const data = res.data
          if(data.status == 1 && data.info){
            this.tableData = data.info.data
            for(var i=0;i<this.tableData.length;i++){
              this.tableData[i].status==1?this.tableData[i].status=true:this.tableData[i].status=false;
            }
            this.page_fun(res)
          }
        })
      },
      status(value){
        const data = qs.stringify({
          id: value.id,
          status:value.status==true?1:3
        })
        // this.ajax(this.business_edit,data
        BussinessEdit(data).then(res=>{
          if(res.data.status==1){
            this.succeed(res)
            this.information()
          }else{
            this.mistake(res)
          }

        })
      },
		}

}
</script>
<style scoped>
	@import "../../assets/css/shoplist.css";
  .drawMoney,.shopmsg{
    height: auto;
  }

</style>
<style>
  .el-table th{
    text-align: center;
  }
</style>
