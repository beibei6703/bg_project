<template>
	<div class="wraper">
		<!-- <div>保证金</div> -->
		<div class="publish-task-top">
			<span>用户任务订单</span>
		</div>
		<div class="drawMoney">
			<div class="shopmsg">
				<div class="infos">
					<span>订单ID</span>
					<el-input  placeholder="请输入内容"></el-input>
				</div>



				<!--<div class="infos">-->
					<!--<span>商家店铺名称</span>-->
					<!--<el-input  placeholder="请输入内容"></el-input>-->
				<!--</div>-->
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
					 <el-button type="primary" plain>查找</el-button>
				</div>
        <div class="infos">
        <span>任务标题</span>
        <el-input  placeholder="请输入内容"></el-input>
        </div>
			</div>
		</div>

		<div class="table_tabs">
			 <el-table
			    :data="tableData"
			      @row-click="getdetail"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="序号"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="订单ID"

			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="用户ID">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="商户ID">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="任务ID">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="状态">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="时间">
			    </el-table-column>
			 </el-table>
		 	<el-pagination
		          :current-page="currentPage"

		          :page-size="pageSize"
		 　　　　　	  layout="total, prev, pager, next, jumper"
		  			background
		　　　　　　:total="totalCount">
			</el-pagination>
		</div>
	</div>
</template>
<script>

	export default{
		name:'orderdispute',
		data () {
			return{
				tableData: [{
		          date: '1',
		          name: '王小虎',
		          address: '上海市普陀18 弄'
		        }, {
		          date: '2',
		          name: '王小虎',
		          address: '上海市普17 弄'
		        }, {
		          date: '3',
		          name: '王小虎',
		          address: '上海市普 弄'
		        }, {
		          date: '4',
		          name: '王小虎',
		          address: '上海市普弄'
		        }],
				total:0,
        		currentPage: 1,
        		pageSize:0,
        		totalCount:0,
				money:'',
				  options: [{
		          value: '选项1',
		          label: '黄金糕'
		        }, {
		          value: '选项2',
		          label: '双皮奶'
		        }, {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, {
		          value: '选项4',
		          label: '龙须面'
		        }, {
		          value: '选项5',
		          label: '北京烤鸭'
		        }],
		        value: '',
			}
		},
		methods:{
			getdetail(val){
				this.$router.push('/handledispute')
				console.log(val)
			}
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
	}

</style>
