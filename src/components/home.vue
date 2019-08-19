<template>
  <div>
    <img src="../assets/image/welcome.png" alt="">
    <!--<ul class="home_header f">-->
      <!--<li class="fl">-->
        <!--<el-badge :value="800" :max="99" class="item div">-->
          <!--22-->
        <!--</el-badge>-->
        <!--<p>累计商家数</p>-->
      <!--</li>-->
      <!--<li class="fl">-->
        <!--<el-badge :value="800" :max="99" class="item div">-->
          <!--22-->
        <!--</el-badge>-->
        <!--<p>累计用户数</p>-->
      <!--</li>-->
      <!--<li class="fl">-->
        <!--<el-badge :value="800" :max="99" class="item div">-->
          <!--22-->
        <!--</el-badge>-->
        <!--<p>累计任务数</p>-->
      <!--</li>-->
      <!--<li class="fl">-->
        <!--<div class="div">-->
          <!--200-->
        <!--</div>-->
        <!--<p>累计成交总额</p>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
      <!--<el-menu-item index="1">最近7天</el-menu-item>-->
      <!--<el-menu-item index="2">最近30天</el-menu-item>-->
      <!--<el-menu-item index="3">-->
        <!--<div class="block">-->
          <!--<el-date-picker-->
            <!--v-model="value7"-->
            <!--type="daterange"-->
            <!--align="right"-->
            <!--unlink-panels-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期"-->
            <!--:picker-options="pickerOptions2">-->
          <!--</el-date-picker>-->
        <!--</div>-->
      <!--</el-menu-item>-->
    <!--</el-menu>-->
    <!--<ul class="broken">-->
      <!--<li>-->
        <!--<h5>商家增长曲线</h5>-->
        <!--<ve-line :data="chartData" :settings="chartSettings"></ve-line>-->
      <!--</li>-->
      <!--<li>-->
        <!--<h5>商家增长曲线</h5>-->
        <!--<ve-line :data="chartData" :settings="chartSettings"></ve-line>-->
      <!--</li>-->
      <!--<li>-->
        <!--<h5>任务增长曲线</h5>-->
        <!--<ve-line :data="chartData" :settings="chartSettings"></ve-line>-->
      <!--</li>-->
      <!--<li>-->
        <!--<h5>成交金额增长曲线</h5>-->
        <!--<ve-line :data="chartData" :settings="chartSettings"></ve-line>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  export default {
    name: "home",
    // data() {
    //   this.chartSettings = {
    //     axisSite: { right: ['下单率'] },
    //     yAxisType: ['KMB', 'percent'],
    //     yAxisName: ['哈哈', '呵呵']
    //   }
    //   return {
    //     chartData: {
    //       columns: ['日期', '访问用户', '下单用户', '下单率'],
    //       rows: [
    //         { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
    //         { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
    //         { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
    //         { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
    //         { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
    //         { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
    //       ]
    //     },
    //     activeIndex: '1',
    //     pickerOptions2: {
    //       shortcuts: [{
    //         text: '最近一周',
    //         onClick(picker) {
    //           const end = new Date();
    //           const start = new Date();
    //           start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    //           picker.$emit('pick', [start, end]);
    //         }
    //       }, {
    //         text: '最近一个月',
    //         onClick(picker) {
    //           const end = new Date();
    //           const start = new Date();
    //           start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    //           picker.$emit('pick', [start, end]);
    //         }
    //       }, {
    //         text: '最近三个月',
    //         onClick(picker) {
    //           const end = new Date();
    //           const start = new Date();
    //           start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
    //           picker.$emit('pick', [start, end]);
    //         }
    //       }]
    //     },
    //     value7: '',
    //   }
    // },
    // methods: {
    //   handleSelect(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    // }
  }
</script>

<style lang="less">
  .home_header {
    li {
      position: relative;
      width: 199px;
      height: 125px;
      background-color: rgba(243, 202, 202, 1);
      .div {
        display: block;
        text-align: center;
        font-size: 28px;
        color: #101010;
        line-height: 125px;
        font-weight: 700;
        .el-badge__content.is-fixed {
          top: 40px;
          right: 83px;
        }
      }
      p {
        position: absolute;
        bottom: 10px;
        right: 20px;
      }
    }
    li + li {
      margin-left: 15px;
    }
  }
  .broken{
    li{
      margin-top: 12px;
      display: inline-block;
      width: 413px;
      height: 363px;
      padding: 13px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      border: 1px solid rgba(220, 220, 220, 1);
      margin-right: 14px;
    }
    h5{
      font-size: 14px;
      padding-left: 10px;
      border-left: 3px solid #E51C23 ;
      text-align: left;
    }
  }
</style>
