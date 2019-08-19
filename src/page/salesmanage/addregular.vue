<template>
	<div class="wrapper">
		<div class="header_shop">
			<span class="blueColor">营销账号&nbsp;> </span>
			<span>规则列表</span>
			<span class="rightSpan" @click="dialogFormVisible = true"> <i class="el-icon-circle-plus"></i>新增规则</span>
			<el-dialog title="新增规则" :visible.sync="dialogFormVisible">
			 <div class="con_regular">
			 	<p class="dialog_regular">
			 		<span class="title_regular">规则名称</span>
			 		<el-input></el-input>
			 		<span class="lastSpan">0/5</span>
			 	</p>
			 	<p class="dialog_regular condition">
			 		<span class="title_regular">规则条件</span>
			 		 <el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" placeholder="请选择" class="margins">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="value" placeholder="请选择" class="margins">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
			 	</p>
			 </div>
			 <div class="btns">
			 	<el-button type="primary">保存</el-button>
			 	<el-button>取消</el-button>
			 </div>
			</el-dialog>
		</div>
		<div class="shop_info">
			<div class="list_regular">
				<p class="regular_one">
					<span class="title_regular">规则名称</span>
					<span>规则名称</span>
				</p>
				<p class="regular_one">
					<span class="title_regular">状态</span>
					<span>已使用 ，特色推荐 模块一</span>
				</p>
				<p class="regular_one">
					<span class="title_regular">规则</span>
					<span>理财、小费金额大于50</span>
					<el-button>删除</el-button>
				</p>
			</div>
		</div>
	</div>

</template>
<script>
	export default{
		name:'orderdetail',
		data(){
			return {
			  dialogFormVisible: false,
		        form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth: '120px',
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
		        value: ''

			}
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
	.rightSpan{
		float:right;
		margin-right:20px;
	}
	.lastSpan{
		margin-left:25px;
	}
	.el-icon-circle-plus{
		margin-right:10px;
	}
	.list_regular{
		width:790px;
		height:146px;
		padding-top:15px;
		margin-left:20px;
		border: 1px solid #e4e7ed;
	}
	.regular_one{
		width:100%;
		height:30px;
		line-height: 30px;
		margin-bottom:10px;

	}
	.regular_one>span{
		display: block;
		float: left;
		height:30px;
		line-height: 30px;
	}
	.title_regular{
		width:80px;
		text-align:right;
		margin-right:20px;
	}
	.regular_one>>>.el-button{
		padding:8px 20px;
		float:right;
		margin-right:20px;
	}
	.dialog_regular{
		width:100%;
		height:auto;
		overflow: hidden;
	}
	.dialog_regular>span{
		display: block;
		float: left;
	}
	.dialog_regular>>>.el-input{
		float:left;
		width:178px;
		height:36px;
	}
	.dialog_regular>>>.el-input__inner{
		height:36px;
	}
	.condition>>>.el-input{
		width:125px;
		margin-right:20px;
	}
	.condition>>>.margins{
		margin-left:100px;
	}
</style>
<style>
.el-dialog{
	width:632px;
	height:521px;
}
.el-select-dropdown{
    	margin-left:20px;
    }

</style>
