<template>
  <div class="wraper">

    <div class="publish-task-top">
      <span>提现待审核</span>
    </div>
    <el-menu :default-active="task_activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="toggleTabs('userdeposit')">用户提现申请</el-menu-item>
      <el-menu-item index="2" @click="toggleTabs('merchantdeposit')">商家提现申请</el-menu-item>
    </el-menu>
    <released :is="currentView" keep-alive :key="activeDate"></released>
  </div>
</template>
<script>
  import userdeposit from '@/page/capitalmanage/user_deposit'
  import merchantdeposit from '@/page/capitalmanage/merchant_deposit'

  export default {
    name: 'depositcheck',
    components: {
      userdeposit,
      merchantdeposit
    },
    data() {
      return {
        task_activeIndex: '1',
        currentView: 'userdeposit',
        activeDate: '',

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
  @import "../../assets/css/shoplist.css";

  .border {
    display: block;
    float: left;
    margin-right: 10px;
    height: 100%;
    border-bottom: 2px solid #f00;
  }

  .center {
    display: block;
    width: 100%;
    text-align: center;
  }

  .infos > > > .el-range-editor {
    margin-left: 20px;
    line-height: 0;
    margin-top: 5px;
    line-height: 30px;
    position: relative;
  }

  .infos > > > .el-input__icon {
    position: absolute;
    top: 0px;
    left: 5px;
  }
  .dialog-footer > > > .el-button {
    padding: 10px 20px;
    margin-right: 30px;
  }

  .table_tabs > > > .cell {
    height: 28px;
  }

</style>
<style>
  .el-select__caret {
    visibility: hidden;
  }
</style>
