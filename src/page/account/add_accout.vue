<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/account' }">账号管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加账号</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="add_content">
      <h5>账号基本信息</h5>
      <div class="details">
        <span>账号：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="details">
        <span>初始密码：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="details">
        <span>确认初始密码：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="details">
        <span>使用者：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="details">
        <span>使用者职位：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="jurisdiction">
      <h5>权限设置</h5>
      <div>
        <span>管理员权限：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>商家列表：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>商家待审核：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>商家待入驻：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>任务管理：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>用户管理：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>资金管理：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>账号管理：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
      <div>
        <span>营销管理：</span>
        <el-radio v-model="radio" label="1">否</el-radio>
        <el-radio v-model="radio" label="2">是</el-radio>
      </div>
    </div>
    <div class="block">
      <el-button>保存</el-button><el-button>取消</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "add_accout",
    data() {
      return {
        input: '',
        radio: '1'
      }
    }
  }
</script>

<style scoped lang="less">
  .el-breadcrumb {
    padding-bottom: 10px;
    border-bottom: 1px solid #888;
    height: 30px;
    line-height: 30px;
  }

  .add_content {
    padding: 20px;
    padding-bottom: 0;
    border-bottom: 1px dashed #e4e7ed;
    .el-input {
      display: inline-block;
      width: 200px;
    }
    .details {
      margin-bottom: 20px;
      span {
        text-align: right;
        display: inline-block;
        width: 100px;
        margin-right: 20px;
      }
    }
  }
  .el-button{
    margin-right: 20px;
  }
  .jurisdiction {
    padding: 20px;
    span{
      text-align: right;
      display: inline-block;
      width: 100px;
      margin-right: 30px;
    }
    div{
      margin-bottom: 20px;
    }
  }

  h5 {
    font-size: 14px;
    padding-left: 10px;
    border-left: 3px solid #E51C23;
    text-align: left;
    margin-bottom: 25px;
  }
</style>
