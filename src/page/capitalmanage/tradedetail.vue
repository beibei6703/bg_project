<template>
	<div class="wrapper">
		<div class="header_shop">
			<span class="blueColor"><router-link to="/deal">资金管理&nbsp;/</router-link> </span>
			<span>交易详情</span>
		</div>
		<div class="shop_info">
			<p class="info_tit">订单基本信息</p>
			<div class="user_one">
				<span class="user_title">订单ID：</span>
				<span class="margin_L">{{value.serial_number}}</span>
			</div>
			<div class="user_one">
				<span class="user_title">财务类型：</span>
				<span class="margin_L">{{value.type}}</span>
			</div>
			<div class="user_one">
				<span class="user_title">金额：</span>
				<span class="margin_L">{{value.money}}</span>
			</div>
			<div class="user_one">
				<span class="user_title">交易时间：</span>
				<span class="margin_L">{{value.create_time}}</span>
			</div>

		</div>
	</div>

</template>
<script>
  import qs from 'qs'
  import {MoneyDetail} from '../../api/money'
	export default{
		name:'tradedetail',
		data(){
			return {
		        value: ''
			}
		},
    created(){
      const data = qs.stringify({
        id: this.$route.query.id,
        tab: this.$route.query.tab,
      })
      // this.ajax(this.money_detail, data,
      MoneyDetail(data).then( res => {
        if(res.data.status==1 && res.data.info){
          this.value=res.data.info
        }else{
          this.mistake(res)
        }

      })
    },
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
