<template>
  <div class="wraper">
    <!-- 账户资金管理-->
    <div class="publish-task-top">
      <span>保证金</span>

    </div>
    <div class="drawMoney_deposit">
      <div class="left_money left_deposit">
        <span class="money-num">商家保证金</span>
        <span class="figure">{{money}}</span>
        <span class="yuan">元</span>
      </div>
        <!--<img src="../../assets/image/tishi.png" alt="" class="lookdetail_img"/><span class="lookdetail" @click='goData'>获取收据</span>-->
      </div>
    <!--<p class="con_txt">-->
      <!--<span class="con_title">累计保证金金额（元）</span>-->
      <!--<span class="moneys">{{money}}</span>-->
    <!--</p>-->
    <el-menu :default-active="task_activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="toggleTabs('tradenote')">交易记录</el-menu-item>
      <el-menu-item index="2" @click="toggleTabs('rechargenote')">对公转账记录</el-menu-item>
      <el-menu-item index="3" @click="toggleTabs('receiptnote')">收据记录</el-menu-item>
    </el-menu>
    <released :is="currentView" keep-alive :key="activeDate"></released>
  </div>
</template>
<script>
  import {SumDeposit} from '../../api/money'
  import qs from 'qs'
  import tradenote from './tradenote' //交易记录
  import rechargenote from './rechargenote' //对公转账记录
  import receiptnote from './receiptnote' //收据记录

  export default {
    name: 'deposit',
    components: {
      tradenote,
      receiptnote,
      rechargenote
    },
    data() {
      return {
        task_activeIndex: '1',
        currentView: 'tradenote',
        activeDate: '',
        money:''
      }
    },
    created(){
      // this.ajax(this.money_sumdeposit,null,
      SumDeposit().then( res=>{
        if(res.data.status ==1 && res.data.info){
          this.money=res.data.info
        }else{
          this.mistake(res)
        }

      })
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
  @import "../../assets/css/userbank.css";
  /*@import "../../assets/css/shoplist.css";*/
  .el-menu-item:focus, .el-menu-item:hover{
    background: transparent !important;
  }
  .searchResult {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e4e7ed;
  }

  .con_txt {
    width: 100%;
    height: 70px;
    /*float:left;*/
  }

  .con_txt > span {
    display: block;
  }

  .con_title {
    margin-left: 30px;
    margin-top: 13px;
  }

  .moneys {
    font-size: 23px;
    font-weight: bold;
    margin-left: 173px;
    margin-top: 12px;
  }

  .searchResult > span {
    height: 50px;
    margin-right: 15px;
    display: block;
    float: left;
    line-height: 50px;

  }

  .redborder {
    border-bottom: 2px solid #E51C23;
  }
</style>
