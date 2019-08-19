<template>
  <div>
    <div class="table_tabs">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        type="index"
        :index="typeIndex"
        label="序号"
        width="60" align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="申请时间" width="180" align="center">
      </el-table-column>
      <el-table-column prop="business_id" label="商家ID" align="center">
      </el-table-column>
      <el-table-column prop="business_name" label="商家名称" align="center">
      </el-table-column>
      <el-table-column prop="money" label="金额" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100" align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="操作" width="150"align="center">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status=='未审核'" @click="seek(scope.row.id)"  type='text' size="small">审核</el-button>
          <el-button type='text' size="small" @click="detail(scope.row.id)">详情</el-button>
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

    <!--<p class="note">收据记录</p>-->
    <!--<div class="drawMoney">-->
      <!--<div class="shopmsg">-->
        <!--<div class="infos">-->
          <!--<span>订单ID</span>-->
          <!--<el-input placeholder="请输入内容"></el-input>-->
        <!--</div>-->
        <!--<div class="infos">-->
          <!--<span>商家ID</span>-->
          <!--<el-input placeholder="请输入内容"></el-input>-->
        <!--</div>-->
        <!--<div class="infos">-->
          <!--<el-button type="primary" plain>查找</el-button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<el-table :data="tableData" border style="width: 100%">-->
      <!--<el-table-column prop="id" label="申请时间" width="80">-->
      <!--</el-table-column>-->
      <!--<el-table-column prop="serial_number" label="商家ID">-->
      <!--</el-table-column>-->
      <!--<el-table-column prop="extract_way" label="商家名称">-->
      <!--</el-table-column>-->
      <!--<el-table-column prop="money" label="公司抬头名称">-->
      <!--</el-table-column>-->
      <!--<el-table-column prop="service_fee" label="金额">-->
      <!--</el-table-column>-->
      <!--<el-table-column prop="create_time" label="寄送地址">-->
      <!--</el-table-column>-->
      <!--<el-table-column prop="create_time" label="操作">-->
        <!--<template slot-scope="scope">-->
          <!--<el-button type="text" size="small">审核</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <!--<el-pagination-->
      <!--@current-change="handleCurrentChange"-->
      <!--:current-page="currentPage"-->
      <!--:page-size="pageSize" background layout="total, prev, pager, next, jumper" 　　-->
      <!--:total="totalCount">-->
    <!--</el-pagination>-->
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <div style="text-align: center">
        <el-button @click="audit(1)" type="text" size="small">审核通过</el-button><el-button @click="audit(2)" type="text" size="small ">审核不通过</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="centerDialogVisibleA"
      width="30%"
      center>
      <p>商家名称：{{form.business_name}}</p>
      <p>寄送地址：{{form.address}}</p>
      <p>金额：{{form.money}}</p>
      <p>状态：{{form.status}}</p>
      <p>备注：{{form.remark}}</p>
      <p>申请时间：{{form.create_time}}</p>
      <div style="text-align: center">

      </div>
    </el-dialog>
  </div>
</template>
<script>
import qs from 'qs'
import {ReceiptStatuc,ReceiptLIst,ReceiptDetail} from '../../api/money'
export default {
  name: 'receiptnote',
  data() {
    return {
      tableData: [],
      centerDialogVisible:false,
      centerDialogVisibleA:false,
      page: 1,
      id:'',
      form:{}
    }
  },
  created() {
    this.initial()
  },
  methods: {
    typeIndex(index) {
      return index + (this.page - 1) * this.pageSize + 1
    },
    audit(val){
      const data = qs.stringify({
        id:this.id,
        status: val
      })
      // this.ajax(this.receipt_status,data,
      ReceiptStatuc(data).then(res=>{
        if(res.data.status==1){
          this.succeed(res)
          this.initial()
          this.centerDialogVisible=false
          this.id=''
        }else{
          this.mistake(res)
          this.centerDialogVisible=true
        }

      })
    },
    handleCurrentChange(val) {
      this.page = val
      const data = qs.stringify({
        page: val,
      })
      // this.ajax(this.receipt_list, data,
      ReceiptLIst(data).then( res => {
        if(res.data.status==1 && res.data.info){
          this.tableData=res.data.info.data
          this.page_fun(res)
        }else{
          this.mistake(res)
        }

      })
    },
    detail(val){
      const data = qs.stringify({
        id: val,
      })
      // this.ajax(this.receipt_detail, data,
      ReceiptDetail(data).then(res => {
        if(res.data.status==1){
          this.form=res.data.info
          this.centerDialogVisibleA=true
        }

      })
    },
    seek(val){
      this.id=val
      this.centerDialogVisible=true
    },
    initial() {
      // this.ajax(this.receipt_list, null,
      ReceiptLIst().then(res => {
        if(res.data.status==1){
          this.tableData=res.data.info.data
          this.page_fun(res)
        }else{
          this.mistake(res)
        }

      })
    }
  },
}
</script>
<style scoped>
  @import "../../assets/css/userbank.css";
  @import "../../assets/css/shoplist.css";

  .el-table > > > .cell {
    height: 28px;
    line-height: 28px;
  }
  .el-dialog p{
    margin-top: 20px;
  }
  .note {
    width: 100%;
    margin-left: 15px;
    border-left: 3px solid #FF0000;
    padding-left: 8px;
    height: 20px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style>
