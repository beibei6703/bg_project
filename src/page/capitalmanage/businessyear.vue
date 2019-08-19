<template>
  <div>
    <div class="tabs-detail">
      <div class="seleStart">
        <div class="block">
          <span class="demonstration">年</span>
          <el-date-picker v-model="value5" value-format="yyyy" type="year"  placeholder="请选择">
          </el-date-picker>
        </div>
      </div>
      <div class="btnsele">
        <el-button class="btns" @click="seleYear">查询</el-button>
        <el-button class="btns" @click='getYearexcel'>导出excel</el-button>
      </div>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column fixed prop="value.mouths" label="日期" align="center">
        <el-table-column prop="value.mouths" label="总合计" width="150" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="value.money" label="支出" align="center">
        <el-table-column prop="value.money" :label="total[0]" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="value.count" label="支出订单数" align="center">
        <el-table-column prop="value.count" :label="String(total[1])" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="value.money2" label="收入" align="center">
        <el-table-column prop="value.money2" :label="total[2]" align="center">

        </el-table-column>
      </el-table-column>
      <el-table-column prop="value.count2" label="收入订单数" align="center">
        <el-table-column prop="value.count2" :label="String(total[3])" align="center">

        </el-table-column>
      </el-table-column>
      <el-table-column prop="" label="年初结余（元）" width="120" align="center">
        <el-table-column prop="" :label="sum[0]" width="120" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="" label="年末结余（元）" width="120" align="center">
        <el-table-column prop="" :label="sum[1]" width="120" align="center">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
 import {YearBill} from '../../api/money'
  import qs from 'qs'
  export default{
    name:'businessyear',
    data(){
      return{
        value5:"",
        value: '',
        list:[],
        sum:[],
        total:[],
      }
    },
    methods:{
      getYearexcel(){
        if(!this.value5==''){
          const ytime = qs.stringify({
            year: this.value5,
            token:this.$utils.localData.get('token')
          })
          const year = ytime.split("&")[0].split("=")[1]
          const token = ytime.split("&")[1].split("=")[1]
          // window.location.href = this.baseURL +'admin/bill/yearfile?year='+year+'&token='+token+'&tab=0';
          window.location.href = this.yearexcel_port + '?year='+year+'&token='+token+'&tab=0'
          // console.log(this.baseURL)


        }else{
          this.$message({
            showClose: true,
            message: '请选择时间',
            type: 'error'
          });
        }
      },
      seleYear(){
        if(!this.value5==''){
          const data = qs.stringify({
            year:this.value5,
            tab:0
          })
          YearBill(data) .then(this.getSucc.bind(this))
        }else{
          this.$message({
            showClose: true,
            message: '请选择时间',
            type: 'error'
          });
        }
      },
      getSucc(res){

        const data = res.data
        if(data.status == 1 && data.info){
          this.sum = data.info.sum
          this.total = data.info.total

          var result = Object.entries(data.info.data).map(([key, value]) => {
            return {value: value, name: key};
          });
          this.list = result
        }else{
          this.$message({
            showClose: true,
            message: '查询失败',
            type: 'error'
          });
        }
      },
      //获取当前年份数据
      getdata(){
        const date = new Date()
        const year = date.getFullYear()
        this.value5 = year.toString()
        const data = qs.stringify({
          year: this.value5,
          tab:0
        })
        YearBill(data) .then(this.getSucc.bind(this))
      }
    },
    created(){
      this.getdata()
    }
  }
</script>

<style scoped>
  @import "../../assets/css/userbank.css";
  @import "../../assets/css/checkaccount.css";
</style>
