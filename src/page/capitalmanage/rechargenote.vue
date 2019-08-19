<template>
  <div>
    <div class="drawMoney shopDraw">
      <div class="shopmsg">
        <div class="infos">
          <span>订单ID</span>
          <el-input v-model="serial_number" placeholder="请输入内容"></el-input>
        </div>
        <div class="infos">
          <span>状态</span>
          <el-select v-model="status" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
      style="width: 100%">
      <el-table-column
        type="index"
        :index="typeIndex"
        label="序号"
        width="60" align="center">
      </el-table-column>
      <el-table-column
        prop="serial_number"
        label="订单ID"
        align="center">
      </el-table-column>
      <el-table-column
        prop="business_id"
        label="商家ID" align="center">
      </el-table-column>
      <el-table-column
        prop="business_name"
        label="公司名称" align="center">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="时间"
        width="180"align="center">
      </el-table-column>
      <el-table-column
        prop="money"
        label="金额" align="center">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        label="操作" align="center">
        <template slot-scope="scope" v-if="scope.row.status=='未支付'">
          <el-button @click="handleClick(scope.row.id)" size="small">已支付</el-button>
        </template>
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
  import {MoneyAccount,MoneyPublic} from "../../api/money";
  export default {
    name: 'rechargenote',
    data() {
      return {
        tableData: [],
        page: 1,
        options:[{
          value: 1,
          label: '已支付'
        }, {
          value: 0,
          label: '未支付'
        }],
        status:'',
        serial_number:''
      }
    },
    created() {
      this.initial()
    },
    methods: {
      seek(){
        if(this.status!==''||this.serial_number!=''){
          const data = qs.stringify({
            status:this.status,
            serial_number:this.serial_number
          })
          // this.ajax(this.money_topublic, data,
          MoneyPublic(data).then(res => {
            if(res.data.status==1){
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
      handleClick(row) {
        const data = qs.stringify({
          id: row,
          })
        // this.ajax(this.money_account,data,
        MoneyAccount(data).then(res=>{
          if(res.data.status==1){
            this.succeed(res)
            this.initial()
          }else{
            this.mistake(res)
          }

        })
      },
      initial() {
        // this.ajax(this.money_topublic, null,
        MoneyPublic().then( res => {
          if(res.data.status==1 && res.data.info){
            this.tableData = res.data.info.data
            this.page_fun(res)
          }else{
            this.mistake(res)
          }

        })
      },
      typeIndex(index) {
        return index + (this.page - 1) * this.pageSize + 1
      },
      handleCurrentChange(val) {
        this.page = val
        const data = qs.stringify({
          page: val,
          status:this.status,
          serial_number:this.serial_number
        })
        // this.ajax(this.money_topublic, data,
        MoneyPublic(data).then( res => {
          if(res.data.status==1){
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
  @import "../../assets/css/shoplist.css";
    .drawMoney{
      margin-left: 0;
      width: 100%;
    }
  .el-table>>>.cell {
    height: 28px;
    line-height: 28px;
  }

  .table_tabs>>>.el-button {
    padding: 4px 15px;
  }
</style>

