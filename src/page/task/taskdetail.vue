<template>
  <div class="task__details">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>
        <router-link to="/tasklist">任务列表</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>任务详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="details" v-for="item in items">
      <div class="mt20" v-if="item.type=='select'">
        <span class="catalog">{{item.attr_title}}：</span><span
        class="serve-number">
              <el-select v-model="item.value" clearable placeholder="请选择" disabled class="details-select">
                <el-option
                  v-for="item in item.option"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
      </div>
      <div class="master mt20" v-if="item.type=='img'"><span class="catalog images">{{item.attr_title}}：</span><span
        class="master-img"><img :src="item.value" alt=""></span></div>
      <div class="mt20" v-if="item.type=='tag'"><span class="catalog">{{item.attr_title}}：</span><span class="title " v-for="tag in item.value">{{tag}}</span>
      </div>

      <div class="mt20" v-if="item.type=='area'"><span class="catalog">{{item.attr_title}}：</span><span class="time">{{item.value[0]}}   至   {{item.value[1]}}</span>
      </div>
      <div class="mt20" v-if="item.type=='radio'"><span class="catalog">{{item.attr_title}}：</span><span class="time">{{item.value}}</span>
      </div>
      <div class="mt20" v-if="item.type=='time'"><span class="catalog">{{item.attr_title}}：</span><span
        class="arrive-time">{{item.value}}</span></div>
      <!--<div class="mt20"><span class="catalog">详细规则说明：</span><span class="rule width424">{{items.rule}}</span></div>-->
      <div class="mt20" v-if="item.type=='textarea'"><span class="catalog images">{{item.attr_title}}：</span><span
        class="tip-number">{{item.value}}</span></div>
      <div class="mt20" v-if="item.type=='imgs'" >
        <span class="catalog images">{{item.attr_title}}：</span>
        <span class="tip-number"  style="display: inline-block">
          <span v-for=" (image,index) in item.value">
              <img :src="image" alt="" width="100px" height="80px" style="margin-right: 10px; margin-bottom: 10px">
          </span>
        </span>
      </div>
      <div class="mt20" v-if="item.type=='address'"><span class="catalog">地址：</span><span class="site">{{item.value[0]}}{{item.value[1]}}{{item.value[2]}}</span>
      </div>
      <div class="mt20" v-if="item.type=='man_number'"><span class="catalog">{{item.attr_title}}：</span><span
        class="people-number">{{item.value}}人</span></div>
      <div class="mt20" v-if="item.type=='tip'"><span class="catalog">{{item.attr_title}}：</span><span
        class="tip-number">{{item.value}}元</span></div>
      <div class="mt20" v-if="item.type=='input'"><span class="catalog">{{item.attr_title}}：</span><span
        class="tip-number">{{item.value}}</span></div>
      <div class="mt20" v-if="item.type=='number'"><span class="catalog">{{item.attr_title}}：</span><span
        class="serve-number">{{item.value}}</span></div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import {TaskDetail} from "../../api/task.js"
  // import pass from '../page/passstatus/pass'
  export default {
    name: "Details",
    data() {
      return {
        items: {},
        classify: [],
        selectedOptions3: [],
        first: [],
        optionone: []
      }
    },
    created() {
      const id = this.$route.query.id
      var data = qs.stringify({
        id: id,
//      title: '',
//      status: 1
      })
      TaskDetail(data).then(response => {
          if(response.data.status ==1){
            this.items = response.data.info
          }
        })
    }
  }
</script>
<style>
  .details-select input{
    color: #606266 !important;
  }
  .details-select .el-input__inner{
    border: 0px;
    background-color: transparent !important;
  }
  .details-select .el-select__caret{
    display: none;
  }
  .task_details .el-cascader__label {
    position: static;
    padding: 0;
    color: #333 !important;
  }
  .task_details .el-input {
    display: none;
  }
  .task_first .el-input.is-disabled .el-input__inner {
    color: #333 !important;
    border: 0;
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
  .task_first, .task_first .el-input, .task_first .el-select-dropdown {
    width: auto;
    min-width: auto !important;
  }
  .task_first .el-input__suffix {
    display: none;
  }
  .details-select .el-input__inner{
    padding: 0 !important;
  }
</style>
<style scoped lang="less">
  @import "../..//assets/css/task.less";
</style>
