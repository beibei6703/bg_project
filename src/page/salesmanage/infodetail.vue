<template>
	<div class="wrapper">
		<div class="header_shop">
			<span class="blueColor">消息设置&nbsp;> </span>
			<span>新增消息</span>
		</div>
		<div class="shop_info">
			
			<div class="user_one">
				<span class="user_title">标题：</span>
				<span class="margin_L">1888888888888888888</span>
			</div>
			<div class="user_one">
				<span class="user_title">主题：</span>
				<span class="margin_L">1234562322332</span>
			</div>
			<div class="user_one">
				<span class="user_title">内容：</span>
				<span class="margin_L">如果你无法简洁的表达你的想法，那只说明你还不够了解它。
  -- 阿尔伯特·爱因斯坦</span>
			</div>
			<div class="user_one">
				<span class="user_title">描述：</span>
				<span class="margin_L">如果你无法简洁的表达你的想法，那只说明你还不够了解它。</span>
			</div>
			<div class="user_one">
				<span class="user_title">地址连接：</span>
				<span class="margin_L">156元</span>
			</div>
			<div class="user_one">
				<span class="user_title">消息接收方：</span>
				<span class="margin_L">18899999999</span>
			</div>
			<div class="user_one">
				<span class="user_title">选择消息类型：</span>
				<span class="margin_L">通知</span>
			</div>
			<div class="user_one">
				<span class="user_title">附件：</span>
				<span class="margin_L">2018-05-08  11:22:55</span>
			</div>
			<div class="user_one">
				<span class="user_title">创建时间：</span>
				<span class="margin_L">2018-05-08  11:22:55</span>
			</div>
			<div class="user_one">
				<span class="user_title">状态：</span>
				<span class="margin_L">已发送</span>
			</div>

		</div>
	</div>
	
</template>
<script>
	export default{
		name:'infodetail',
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