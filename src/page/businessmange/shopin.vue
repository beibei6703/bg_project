<template>
  <div class="wraper">
    <!-- <div>保证金</div> -->
    <div class="publish-task-top">
      <span>商家待入住</span>
    </div>
    <div class="drawMoney shopDraw">
      <div class="shopmsg">
        <div class="infos">
          <span>手机号</span>
          <el-input v-model="mobile" placeholder="请输入内容"></el-input>
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
          <el-button type="primary" @click="seek" plain>查找</el-button>
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
          width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="手机号"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="create_time"
          label="提交时间"
          align="center"
         >
        </el-table-column>
        <el-table-column
          label="状态"
          align="center"
        >
          <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            @change="enter_status(scope.row.id,scope.row.status)"
            active-text="已联系未入驻"
            inactive-text="新申请">
          </el-switch>
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
import {BussinessWait,BussinessWaitStatus} from '../../api/shop'
  export default {
    name: 'shopin',
    data() {
      return {
        tableData: [],
        money: '',
        options: [{
          value: '0',
          label: '新申请'
        }, {
          value: '1',
          label: '已联系未入住'
        }],
        mobile:'',
        status: '',
        page:1
      }
    },
    created() {
      BussinessWait().then( res => {
        if(res.data.status ==1 && res.data.info){
          this.tableData = res.data.info.data
          this.page_fun(res)
          for(var i=0;i<this.tableData.length;i++){
            this.tableData[i].status==0?this.tableData[i].status=false:this.tableData[i].status=true
          }
        }else{
          this.mistake(res)
        }

      })
    },
    methods: {
      enter_status(id,status){
        const data = qs.stringify({
          id: id,
          status:status==true?1:0
        })
        // this.ajax(this.business_waitedit, data,
        BussinessWaitStatus(data).then(res => {
          if(res.data.status ==1){
            this.succeed(res)
          }else{
            this.mistake(res)
          }


        })
      },
      seek(){
          if(this.mobile!=''||this.status!=''){
            const data = qs.stringify({
              mobile: this.mobile,
              status:this.status
            })
            // this.ajax(this.business_wait, data,
            BussinessWait(data).then( res => {
              if(res.data.status ==1 && res.data.info){
                this.tableData = res.data.info.data
                this.page_fun(res)
                for(var i=0;i<this.tableData.length;i++){
                  this.tableData[i].status==0?this.tableData[i].status=false:this.tableData[i].status=true
                }
              }else{
                this.mistake(res)
              }

            })
          }else{
            this.$message({
              showClose:true,
              message: '请输入筛选条件',
              type: 'error'
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
          mobile: this.mobile,
          status:this.status
        })
        // this.ajax(this.business_wait, data,
        BussinessWait(data).then(res => {
          if(res.data.status==1 && res.data.info){
            this.tableData = res.data.info.data
            this.page_fun(res)
            for(var i=0;i<this.tableData.length;i++){
              this.tableData[i].status==0?this.tableData[i].status=false:this.tableData[i].status=true
            }
          }else{
            this.mistake(res)
          }

        })
      }
    }

  }
</script>
<style scoped>
  @import "../../assets/css/shoplist.css";


</style>
