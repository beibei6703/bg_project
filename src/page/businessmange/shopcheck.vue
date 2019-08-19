<template>
	<div class="wraper">
		<!-- <div>保证金</div> -->
		<div class="publish-task-top">
			<span>商家待审核</span>
		</div>
		<div class="drawMoney shopDraw">
			<div class="shopmsg">
				<div class="infos">
					<span>手机号</span>
					<el-input v-model="mobile" placeholder="请输入内容"></el-input>
				</div>
				<div class="infos">
					<span>状态</span>
					 <el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				</div>
				<div class="infos">
					 <el-button type="primary" @click="seek" plain>查找</el-button>
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
           width="130" align="center">
         </el-table-column>
         <el-table-column
           prop="cate_id"
           label="类型" align="center">
         </el-table-column>
         <el-table-column
           prop="create_time"
           label="申请时间"
           width="180" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="status"
			      label="状态"
			      width="120" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="操作" align="center">
			       <template slot-scope="scope">
			        <el-button @click="handleClick(scope.row.id)" type="text" size="small">审核</el-button>
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
  import {BussinessNocheck,BussinessList} from '../../api/shop'
	export default{
		name:'shopcheck',
		data () {
			return{
        mobile:'',
				tableData: [],
        value: '',
        options:[{
          value: 0,
          label: '待审核'
        }, {
          value: 2,
          label: '审核不通过'
        }, ],
        page:1,
			}
		},
    created(){
      // this.ajax(this.business_notcheck,null,
      BussinessNocheck().then(res=>{
        if(res.data.status==1 && res.data.info){
          this.tableData=res.data.info.data
          for(var i=0; i<this.tableData.length;i++){
            this.tableData[i].status==0?this.tableData[i].status='待审核':this.tableData[i].status='审核不通过'
          }
          this.page_fun(res)
        }else{
          this.mistake(res)
        }

      })
    },
		methods:{
      seek(){
        if(!this.value==''|| !this.mobile==''){
          const data ={
            status:this.value,
            mobile:this.mobile,
          }

          // this.ajax(this.business_notcheck,data,
          BussinessNocheck(data).then(res=>{
            if(res.data.status ==1){
              this.tableData=res.data.info.data
              for(var i=0; i<this.tableData.length;i++){
                this.tableData[i].status==0?this.tableData[i].status='待审核':this.tableData[i].status='审核不通过'
              }
              this.page_fun(res)
              this.$message({
                showClose:true,
                message: res.data.msg,
                type: 'success'
              });
            }else{
              this.$message({
                showClose:true,
                message: res.data.msg,
                type: 'error'
              });
            }

          })
        }else{
          console.log(this.mobile)
          this.$message({
            showClose:true,
            message: '请输入筛选条件',
            type: 'error'
          });
        }

      },
			handleClick(id){
        this.$router.push({path: '/shopdetail', query: {id: id}});
			},
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      handleCurrentChange(val){
        this.page = val
        const data = qs.stringify({
          page: val,
          status:this.value,
          mobile:this.mobile,
        })
        // this.ajax(this.business_list,data,
          BussinessList(data).then(res=>{
            if(res.data.status==1){
              this.tableData=res.data.info.data
              for(var i=0; i<this.tableData.length;i++){
                this.tableData[i].status==0?this.tableData[i].status='待审核':this.tableData[i].status='审核不通过'
              }
              this.page_fun(res)
            }else{
              this.mistake(res)
            }

        })
			}
		}

}
</script>
<style scoped>
	@import "../../assets/css/shoplist.css";
</style>
