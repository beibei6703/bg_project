<template>
  <div class="wraper">
    <!-- <div>对账明细</div> -->
    <div class="publish-task-top">
      <!--<span class="bluecolor" >账户余额&nbsp;>&nbsp;</span>-->
      <span>对账账单</span>
    </div>
    <div class="detailcon">
      <el-tabs type="card">
        <el-tab-pane label="月汇总">
          <monthaccount></monthaccount>
        </el-tab-pane>
        <el-tab-pane label="年汇总">
          <yearaccount></yearaccount>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  import monthaccount from './monthaccount'
  import yearaccount from './yearaccount'
  export default{
    name: 'checkaccount',
    components:{
      monthaccount,
      yearaccount
    },

    data(){
      return {
        total:0,
        currentPage: 1,
        pageSize:0,
        totalCount:0,
        begin_time:'',
        end_time:'',
        value:'',
        checkList:[],
      }
    },
    methods: {}

  }
</script>
<style scoped>
  @import "../../assets/css/userbank.css";
  @import "../../assets/css/checkaccount.css";

</style>
<style>
  .el-input--prefix {
    padding:0;
  }
  .el-icon-date:before{
    visibility: hidden;
  }

</style>
