<template>
	<div class="wraper">
		<div class="head_sale">营销管理</div>
    <home-set></home-set>

	</div>
</template>
<script>
	import HomeBanner from './homebanner'
	import HomeSet from './homeset'
	export default{
		name:'sales',
		components:{
			HomeBanner,
			HomeSet
		},
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
@import '../../assets/css/sales.css'
</style>
