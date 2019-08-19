<template>
  <div>
    <div class="drawMoney">
      <div class="shopmsg f">
        <div class="infos">
          <span>订单ID</span>
          <el-input v-model="serial_number" placeholder="请输入内容"></el-input>
        </div>
        <div class="infos">
          <span>财务类型</span>
          <el-select v-model="type" placeholder="请选择" @change="selects">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="infos">
          <span>时间</span>
          <el-date-picker class="jiaoyi"
                          v-model="time"
                          type="daterange"
                          align="right"
                          unlink-panels
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          :picker-options="pickerOptions2"
                          style="width: 260px;">
          </el-date-picker>
        </div>
        <div class="infos">
          <el-button @click="seek"  plain>查找</el-button>
          <el-button @click="exports"  plain>导出excel</el-button>
        </div>
      </div>
    </div>
    <div class="table_tabs">
      <el-table
        @row-click="getdetail"
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          :index="typeIndex"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="serial_number"
          label="订单ID"
          width="250"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="财务类型"
          width="180">
        </el-table-column>

        <el-table-column
          prop="money"
          label="金额"
        >
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="时间"
        >
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
  import {MoneyList,MoneyType} from "../../api/money"
  export default {
    name: "merchant_deal",
    data() {
      return {
        type:'',
        options: [],
        tableData: [],
        page: 1,
        serial_number:"",
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }],
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6
          }
        },
        pickerOptions0: {

        },
        time:''
      }
    },
    created() {
      const data = qs.stringify({
        tab: 0,
      })
      // this.ajax(this.money_list, data,
        MoneyList(data).then(res => {
        this.tableData = res.data.info.data
        this.page_fun(res)
      })
      // this.ajax(this.money_gettype, data,
      MoneyType(data).then(res => {
       this.options = res.data.info
      })
    },
    methods: {
      selects(val){
      },
      getdetail(val) {
        this.$router.push({path: '/tradedetail', query: {id: val.id, tab:0,}});
      },
      exports(){
        if(this.serial_number!=''||this.time!='' ||this.type!=''){
          window.location.href = this.deal_dayfile+'?tab=0&serial_number='+this.serial_number+'&time='+this.time+'&type='+this.type+'&token='+localStorage.getItem("token")
        }else{
          this.$message({
            type: 'error',
            message: '请输入筛选条件'
          });
        }
      },
      seek(){
        if(this.serial_number!=''||this.time!='' ||this.type!==''){
          const data = qs.stringify({
            serial_number: this.serial_number,
            time:this.time,
            type:this.type,
            tab: 0,
          })
          // this.ajax(this.money_list, data,
            MoneyList(data).then(res => {
            this.tableData = res.data.info.data
            this.page_fun(res)
          })
        }else{
          this.$message({
            type: 'error',
            message: '请输入筛选条件'
          });
        }
      },
      typeIndex(index) {
        return index + (this.page - 1) * this.pageSize + 1
      },
      handleCurrentChange(val) {
        this.page = val
        const data = qs.stringify({
          page: val,
          type:this.type,
          time:this.time,
          serial_number:this.serial_number,
          tab: 0,
        })
        // this.ajax(this.money_list, data,
         MoneyList(data).then( res => {
          this.tableData = res.data.info.data
          this.page_fun(res)
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/shoplist.css";
.infos>>>.el-input{
  margin-left:15px !important;
}
  .colorCon {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .table_tabs>>>.el-table__body td{
    cursor: pointer !important;
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
  .drawMoney,.shopmsg{
    height: auto;
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
    line-height: 0;
    margin-top: 5px;
    line-height: 30px;
    position: relative;
  }

  .infos > > > .el-input__icon {
    position: absolute;
    top: -1px;
    /*left:px;*/
  }

  .infos > > > .el-range-separator {
    line-height: 25px;
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
  .jiaoyi .el-range__icon,.jiaoyi .el-range-separator{
    /*line-height: 25px;*/
  }
</style>
