<template>
  <div>
    <div class="drawMoney">
      <div class="shopmsg">
        <div class="infos">
          <span>提现用户</span>
          <el-input v-model="payee_real_name" placeholder="请输入内容"></el-input>
        </div>
        <div class="infos">
          <span>状态</span>
          <el-select v-model="value" placeholder="请选择">
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
          <el-button @click="deposit" plain>导出未提现</el-button>
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
          width="50" align="center">
        </el-table-column>
        <el-table-column
          prop="serial_number"
          label="订单ID"
          width="240" align="center">
        </el-table-column>
        <el-table-column
          prop="payee_real_name"
          label="提现用户" align="center">
        </el-table-column>

        <el-table-column
          prop="money"
          label="提现金额" align="center">
        </el-table-column>
        <el-table-column
          prop="payee_account"
          label="账户"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="提现时间"
          width="100" align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作" align="center">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status=='已导出'"
                       size="mini"
                       @click="handleEdit(scope.$index, scope.row);">撤销
            </el-button>
            <el-dialog
              :visible.sync="centerDialogVisible"
              width="30%"
              center>
              <div>
                <span>撤销原因：</span>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入撤销原因"
                  v-model="form.reason"
                  style="width: 300px;vertical-align: text-top"
                >
                </el-input>
              </div>
              <div style="margin-top: 10px">
                <span>返回余额：</span>
                <template>
                  <el-radio v-model="form.refund" label='1'>是</el-radio>
                  <el-radio v-model="form.refund" label='0'>否</el-radio>
                </template>
              </div>
              <span slot="footer" class="dialog-footer">
					    <el-button type="primary" @click="repeal()">确 定</el-button>
					  </span>
            </el-dialog>
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
  import {withdrawList,withdrawRevert} from '../../api/money'
  export default {
    name: "merchant_deposit",
    data() {
      return {
        centerDialogVisible: false,
        tableData: [],
        money: '',
        options: [{
          value: 0,
          label: '未处理'
        }, {
          value: 1,
          label: '已导出'
        }, {
          value: 2,
          label: '提现失败'
        }],
        form:{
          refund:'1',
          reason:'',
          id:'',
          tab:0
        },
        value: '',
        page: 1,
        payee_real_name: ''
      }
    },
    created() {
      this.initial()
    },
    methods: {
      typeIndex(index) {
        return index + (this.page - 1) * this.pageSize + 1
      },
      initial() {
        const data = qs.stringify({
          tab: 0,
        })
        // this.ajax(this.money_transfer, data,
        withdrawList(data).then(res => {
          this.tableData = res.data.info.data
          this.page_fun(res)
        })
      },
      handleCurrentChange(val) {
        this.page = val
        const data = qs.stringify({
          page: val,
          tab: 0,
          payee_real_name: this.payee_real_name,
          status: this.value,
        })
        // this.ajax(this.money_transfer, data,
        withdrawList(data).then( res => {
          this.tableData = res.data.info.data
          this.page_fun(res)
        })
      },
      repeal(){
        if(this.form.refund!==''&&this.form.reason!=''){
          this.form.refund=Number(this.form.refund)
          const data = qs.stringify(this.form)
          // this.ajax(this.money_revert,data,
          withdrawRevert(data).then(res=>{
            if(res.data.status==1){
              this.centerDialogVisible = false
              this.succeed(res)
              this.initial()
              this.form={
                refund:'1',
                  reason:'',
                  id:'',
                  tab:0
              }
            }else{
              this.mistake(res)
            }

          })

        }else{
          this.$message({
            message: '请输入撤销原因',
            type: 'error'
          });
        }
      },
      seek() {
        if (this.payee_real_name != '' || this.value !== '') {
          const data = qs.stringify({
            payee_real_name: this.payee_real_name,
            status: this.value,
            tab: 0,
          })
          // this.ajax(this.money_transfer, data,
          withdrawList(data).then(res => {
            if(res.data.status==1 && res.data.info){
              this.tableData = res.data.info.data
              this.page_fun(res)
            }else{
              this.mistake(res)
            }

          })
        } else {
          this.$message({
            message: '请输入筛选条件',
            type: 'error'
          });
        }
      },
      deposit() {
        window.location.href = this.deposit_download + '?&tab=0&token=' + localStorage.getItem("token")
        this.initial()
      },
      handleEdit(index, row) {
        this.form.id=row.id
        this.centerDialogVisible = true
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/shoplist.css";
  .drawMoney{
    height:95px ;
  }
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

  .infos > > > .el-range-separator {
    /*line-height: 25px;*/
  }

  .dialog-footer > > > .el-button {
    padding: 6px 15px;
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
