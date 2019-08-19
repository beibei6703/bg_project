<template>
	<div class="wrapper">
		<div class="header_shop">
			<span class="blueColor">用户订单&nbsp;> </span>
			<span>订单详情</span>
		</div>
		<div class="shop_info">
			<p class="info_tit">订单基本信息</p>
			<div class="user_one">
				<span class="user_title">订单ID：</span>
				<span class="margin_L">1234563456578</span>
			</div>
			<div class="user_one">
				<span class="user_title">用户ID：</span>
				<span class="margin_L">1234562322332</span>
			</div>
			<div class="user_one">
				<span class="user_title">用户昵称：</span>
				<span class="margin_L">123456</span>
			</div>
			<div class="user_one">
				<span class="user_title">商家ID：</span>
				<span class="margin_L">123456</span>
			</div>
			<div class="user_one">
				<span class="user_title">商家昵称：</span>
				<span class="margin_L">123456</span>
			</div>
			<div class="user_one">
				<span class="user_title">任务ID：</span>
				<span class="margin_L">123456</span>
			</div>
			<div class="user_one">
				<span class="user_title">订单金额：</span>
				<span class="margin_L">123456</span>
			</div>
			<div class="user_one">
				<span class="user_title">订单状态：</span>
				<span class="margin_L">123456</span>
			</div>
			<div class="user_one border">
				<span class="user_title">创建时间：</span>
				<span class="margin_L">20134-12-22 11:22:223</span>
			</div>
			<p class="info_tit">稿件详情</p>
			<div class="user_one">
				<span class="user_title">姓名：</span>
				<span class="margin_L">咩咩咩咩咩咩咩咩</span>
				<span class="user_title title_Ln">金额：</span>
				<span class="margin_L">18888899988</span>
				
			</div>
			<div class="user_one">
				<span class="user_title">说明：</span>
				<span class="margin_L widtnCon">咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩咩</span>
				
			</div>
			<div class="identityCon">
				
				<img src="../../assets/logo.png" alt="" />
				<img src="../../assets/logo.png" alt="" />
				<img src="../../assets/logo.png" alt="" />
				<img src="../../assets/logo.png" alt="" />
			</div>
			
		</div>
	</div>
	
</template>
<script>
	export default{
		name:'orderdetail',
		data(){
			return {
				 options: [{
		          value: '选项1',
		          label: '店铺基本信息'
		        }, {
		          value: '选项2',
		          label: '身份信息'
		        }, {
		          value: '选项3',
		          label: '全部'
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
</style> 
<style>
.el-select-dropdown{
    	margin-left:20px;
    }	
    
</style>