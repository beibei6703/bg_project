<template>
    <div class="wraper">
      <div class="publish-task-top">
        <span>广告分类：{{name}}</span>
        <el-button @click="increaseAd">新增广告</el-button>
      </div>
      <div class="table_tabs">
        <el-table
          :data="list"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            :index="typeIndex"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            prop="title"
            label="广告名称">
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="创建时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                @change="getStatus(scope.row)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button @click="getEditAd(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="getDeletAd(scope.row)" type="text" size="small">删除</el-button>
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
  import  qs from 'qs'
  import {AdList,Enable,Disable,AdDElete} from "../../api/ad";
  import bus from '../../bus.js'

  export default {
        name: "ad",
      data(){
          return{
            name:"",
            id:'',
            total:0,
            page:1,
            currentPage: 1,
            pageSize:0,
            totalCount:0,
            list:[],
            e_id:'',

          }
      },
      methods:{
        increaseAd(){
          this.$router.push('/increasead')
        },
        getEditAd(val){
          this.$router.push('/adedit?id='+val.id)
        },
        getDeletAd(val){

          AdDElete(val.id).then(this.handleDeleSucc.bind(this))

        },
        handleDeleSucc(res){
          console.log(res)
          const data = res.data
          if(data.status == 1){
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
            this.getdata()
          }else{
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
          }
        },
        getStatus(val){
          console.log(val.status)
          const data = qs.stringify({
            id:val.id
          })
          if(val.status==true){
            Enable(data) .then(this.Succ.bind(this))
          }else{
              Disable(data).then(this.Succ.bind(this))
          }
        },
        Succ(res){
        const data =res.data
          if(data.status==1){
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
            this.getdata()
        }else{
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
            this.getdata()
          }
        },
        typeIndex(index){
          return index + (this.page-1)*this.pageSize + 1
        },
        handleCurrentChange(val){
          this.page = val
          const data = {
            page: val,
            id:this.id
          }
          AdList(data).then(this.getSucc.bind(this))
        },
          getdata(){
            const data = {
              page: 1,
              id:this.id
            }
            AdList(data).then(this.getSucc.bind(this))
          },
        getSucc(res){
          const data = res.data
          if (data.status == 1 && data.info) {
            this.list = data.info.data
            this.total = data.info.total
            this.currentPage = Number(data.info.current_page)
            this.totalCount = data.info.total
            this.pageSize = data.info.per_page
            // console.log(this.list[0].status)
            for (var i = 0; i < this.list.length; i++) {
              if (this.list[i].status == 1) {
                this.list[i].status = true
              } else {
                this.list[i].status = false
              }
            }
          }
        },

      },
      created(){
          // console.log()
          this.id = this.$route.query.id
          this.name = this.$route.query.name

          this.getdata()
      },
    beforeDestroy(){
      bus.$emit('trandata',this.name)
    }
    }
</script>

<style scoped>
  @import "../../assets/css/shoplist.css";
  .publish-task-top>>>.el-button{
    float: right;
  }
</style>
