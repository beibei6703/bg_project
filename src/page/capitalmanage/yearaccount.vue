<template>
	<div>
    <el-menu :default-active="task_activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="toggleTabs('useryear')">用户</el-menu-item>
      <el-menu-item index="2" @click="toggleTabs('businessyear')">商家</el-menu-item>
    </el-menu>
    <released :is="currentView" keep-alive :key="activeDate"></released>

	</div>
</template>
<script>
  import useryear from './useryear'
  import businessyear from './businessyear'

  import axios from 'axios'
	import qs from 'qs'
	export default{
		name:'yearaccount',
    components:{
		  useryear,
      businessyear
    },
		data(){
			return{
        task_activeIndex: '1',
        currentView: 'useryear',
        activeDate: '',
		  	value5:"",
	        value: '',
	        list:[],
			sum:[],
			total:[],
			}
		},
		methods: {
      toggleTabs(tabText) {
        this.currentView = tabText;
      },
      handleSelect(key, keyPath) {
        this.task_activeIndex = key
      },
    }

	}
</script>
<style scoped>
  .el-menu-item:focus, .el-menu-item:hover{
    background: transparent !important;
  }
</style>
