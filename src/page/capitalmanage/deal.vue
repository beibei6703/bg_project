<template>
  <div class="wraper">

    <div class="publish-task-top">
      <span>资金管理</span>
    </div>
    <div class="colorCon">
      <div class="red">
        <span class="num">{{money[0]}}</span>
        <span class="small">用户累计赚取金额</span>
      </div>
      <div class="blue">
        <span class="num">{{money[1]}}</span>
        <span class="small">用户累计提现金额</span>
      </div>
      <div class="blue">
        <span class="num">{{money[2]}}</span>
        <span class="small">商家累计提现金额</span>
      </div>
    </div>
    <div class="publish-task-top">
      <el-menu :default-active="task_activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="toggleTabs('userdeal')">用户交易明细</el-menu-item>
        <el-menu-item index="2" @click="toggleTabs('merchantdeal')">商家交易明细</el-menu-item>
      </el-menu>
      <released :is="currentView" keep-alive :key="activeDate"></released>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import {MoneyTop} from '../../api/money'
  import userdeal from '@/page/capitalmanage/user_deal'
  import merchantdeal from '@/page/capitalmanage/merchant_deal'
  export default {
    name: 'deal',
    components:{
      userdeal,
      merchantdeal
    },
    data() {
      return {
        value: '',
        value4: '',
        options:[],
        task_activeIndex :'1',
        currentView: 'userdeal',
        activeDate: '',
        money:[],
      }
    },
    created() {
      const data = qs.stringify({
        tab: 0,
      })
      // this.ajax(this.money_top, data,
      MoneyTop(data).then( res => {
        if(res.data.status==1 && res.data.info){
          // console.log(res)
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
        this.task_activeIndex=key
      },
      typeIndex(index) {
        return index + (this.page - 1) * this.pageSize + 1
      },
      handleCurrentChange(val) {
        this.page = val
        const data = qs.stringify({
          page: val,
        })
        // this.ajax(this.business_wait, data, res => {
        //   this.tableData = res.data.info.data
        //   this.page_fun(res)
        //   for(var i=0;i<this.tableData.length;i++){
        //     this.tableData[i].status==0?this.tableData[i].status=false:this.tableData[i].status=true
        //   }
        // })
      }
    }

  }
</script>
<style scoped>
  @import "../../assets/css/shoplist.css";
  .el-menu-item:focus, .el-menu-item:hover{
    background: transparent !important;
  }
  .colorCon {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .num {
    margin-top: 25px;
  }

  .heightnew {
    height: 100px;
  }

  .colorCon > div {
    width: 180px;
    display: flex;
    flex-direction: column;
    color: #fff;

    height: 100px;
    font-size: 26px;
    text-align: center;
  }

  .red {
    background: #EC262C;
  }

  .blue {
    background: #4EA8E1;
  }

  .small {
    font-size: 14px;
    margin-top: 10px;
  }

  .border {
    display: block;
    float: left;
    margin-right: 10px;
    height: 100%;
    border-bottom: 2px solid #f00;
  }

  .infos > > > .el-range-editor {
    margin-left: 20px;

    margin-top: 5px;
    line-height: 36px;
    position: relative;
  }

  .infos > > > .el-input__icon {
    position: absolute;
    top: -1px;
    /*left:px;*/
  }

  .infos > > > .el-range-separator {
    /*line-height: 25px;*/
  }

  .btns {
    width: 100%;
    display: flex;
    padding-left: 50px;
    /*justify-content: space-around;*/
    padding-top: 20px;
  }

  .btns > > > .el-button {
    padding: 10px 20px;

    margin-left: 20px;
    margin-right: 30px;
  }

  .btns > > > .el-button + .btns > > > .el-button {
    margin-left: 50px;
  }
</style>
<style>
  .el-select__caret {
    visibility: hidden;
  }
</style>
