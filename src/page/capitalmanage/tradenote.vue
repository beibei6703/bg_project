<template>
  <div>
    <div class="drawMoney shopDraw">
      <div class="shopmsg">
        <div class="infos">
          <span>订单ID</span>
          <el-input v-model="serial_number" placeholder="请输入内容"></el-input>
        </div>
        <div class="infos">
          <span>商家ID</span>
          <el-input v-model="business_id" placeholder="请输入内容"></el-input>
        </div>
        <div class="infos">
          <el-button @click="seek" plain>查找</el-button>
        </div>
      </div>
    </div>
    <div class="table_tabs">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      >
      <el-table-column
        type="index"
        :index="typeIndex"
        label="序号"
        width="60" align="center">
      </el-table-column>
      <el-table-column
        prop="serial_number"
        label="订单ID"
        width="240" align="center">
      </el-table-column>
      <el-table-column
        prop="business_id"
        label="商家ID" align="center">
      </el-table-column>
      <el-table-column
        prop="type"
        label="交易类型" align="center">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="时间"
        width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="pay_way"
        label="支付方式" align="center">
      </el-table-column>
      <el-table-column
        prop="money"
        label="金额" align="center">
      </el-table-column>
    </el-table>


      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout=" total, prev, pager, next, jumper"
        background
        :total="totalCount">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import qs from 'qs'
  import {MoneyDeposit} from '../../api/money'
  export default {
    name: 'tradenote',
    data() {
      return {
        page: 1,
        tableData: [],
        serial_number:'',
        business_id:''
      }
    },
    created(){
      this.initial()
    },
    methods: {
      typeIndex(index) {
        return index + (this.page - 1) * this.pageSize + 1
      },
      seek(){
        if(this.serial_number!=''||this.business_id!=''){
          const data = qs.stringify({
            serial_number:this.serial_number,
            business_id:this.business_id
          })
          // this.ajax(this.money_deposit, data,
          MoneyDeposit(data).then( res => {
            if(res.data.status==1 && res.data.info){
              this.tableData = res.data.info.data
              this.page_fun(res)
            }else{
              this.mistake(res)
            }

          })
        }else{
          this.$message({
            message: '请输入筛选条件',
            type: 'error'
          });
        }
      },
      handleCurrentChange(val) {
        this.page = val
        const data = qs.stringify({
          page: val,
          serial_number:this.serial_number,
          business_id:this.business_id
        })
        // this.ajax(this.money_deposit, data,
        MoneyDeposit(data).then( res => {
          if(res.data.status ==1 && res.data.info){
            this.tableData = res.data.info.data
            this.page_fun(res)
          }else{
            this.mistake(res)
          }

        })
      },
      initial() {
        // this.ajax(this.money_deposit, null,
        MoneyDeposit() .then(res => {
          if(res.data.status ==1 && res.data.info){
            this.tableData = res.data.info.data
            this.page_fun(res)
          }else{
            this.mistake(res)
          }

        })
      },
    },
  }
</script>
<style scoped>
  @import "../../assets/css/userbank.css";
  @import '../../assets/css/shoplist.css';
  .drawMoney{
    margin-left: 0;
    width: 100%;
  }
  .el-table > > > .cell {
    height: 28px;
    line-height: 28px;
  }
</style>
