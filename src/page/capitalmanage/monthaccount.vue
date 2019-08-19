<template>
<div>
  <el-menu :default-active="task_activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" @click="toggleTabs('usermonth')">用户</el-menu-item>
    <el-menu-item index="2" @click="toggleTabs('businessmonth')">商家</el-menu-item>
  </el-menu>
  <released :is="currentView" keep-alive :key="activeDate"></released>
 </div>
</template>
<script>
  import usermonth from './usermonth' ;
  import businessmonth from './businessmonth'
	export default {
		name:'monthaccount',
    components:{
      usermonth,
      businessmonth
    },
		data(){
			return{
        task_activeIndex: '1',
        currentView: 'usermonth',
        activeDate: '',
				value2: '',
				value4: '',
        		value5: '',
				list:[],
				sum:[],
				total:[],
				value: ''

			}
		},
		methods:{
      toggleTabs(tabText) {
        this.currentView = tabText;
      },
      handleSelect(key, keyPath) {
        this.task_activeIndex = key
      },
    },
    created(){
		  // console.log(this.baseURLs)
    }
	}
</script>
<style scoped>
  .el-menu-item:focus, .el-menu-item:hover{
    background: transparent !important;
  }
</style>
