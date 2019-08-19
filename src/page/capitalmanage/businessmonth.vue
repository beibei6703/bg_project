<template>
  <div>
    <div class="tabs-detail">
      <div class="seleStart">
        <!--<div class="block">-->
        <span class="demonstration">选择时间</span>
        <el-date-picker v-model="value2" value-format="yyyy-M" :default-value="value2" type="month">
        </el-date-picker>
        <!-- </div>-->
      </div>
      <div class="btnsele">
        <el-button class="btns" @click="seleTime">查询</el-button>
        <el-button class="btns" @click="getMonthexcel">导出excel</el-button>
      </div>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column fixed prop="value.days" label="日期" width="150" align="center">
        <el-table-column prop="value.days" label="总合计" width="150" align="center">
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
      <el-table-column prop="" label="月初结余（元）" width="120" align="center">
        <el-table-column prop="" :label="sum[0]" width="120" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column prop="" label="月末结余（元）" width="120" align="center">
        <el-table-column prop="" :label="sum[1]" width="120" align="center">
        </el-table-column>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
  import {MonthBill} from "../../api/money";
  import qs from 'qs'
  export default {
    name: "businessmonth",
    data(){
      return{
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
      getMonthexcel(){
        if(!this.value2==''){
          const month = qs.stringify({
            date: this.value4,
            token:localStorage.getItem("token")
          })
          const date = month.split("&")[0].split("=")[1]
          const token = month.split("&")[1].split("=")[1]
          window.location.href = this.baseURL +'admin/bill/monthfile?date='+date+'&token='+token+'&tab=0' ;
        }else{
          this.$message({
            showClose: true,
            message: '请选择时间',
            type: 'error'
          });
        }
      },
      seleTime(){
//				console.log(date.now())
        console.log(this.value4)
        const data = qs.stringify({
          date: this.value2,
          tab:0
        })
        MonthBill(data).then(this.getmonthSucc.bind(this))
      },
      getmonthSucc(res){
        const data = res.data
//				console.log(data)
        if(data.status == 1 && data.info){
          this.sum = data.info.sum
          this.total = data.info.total
          var result = Object.entries(data.info.data).map(([key, value]) => {
            return {value: value, name: key};
          });
          this.list = result
					// console.log(this.list)
        }else{
          console.log(data.msg)
        }
      },
      getmonth(){
        const date = new Date()
        const year = date.getFullYear()
        const month =date.getMonth()+1
        this.value2 = year+'-'+month
        console.log(this.value2)
        const data = qs.stringify({
          date: this.value2,
          tab:0
        })

        MonthBill(data).then(this.getmonthSucc.bind(this))
      }

    },
    created(){
      this.getmonth()
    }

  }
</script>

<style scoped>
  @import "../../assets/css/userbank.css";
  @import "../../assets/css/checkaccount.css";
</style>
