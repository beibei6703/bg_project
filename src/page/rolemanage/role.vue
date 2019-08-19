<template>
  <div class="wraper">
    <!-- <div>保证金</div> -->
    <div class="publish-task-top">
      <span>角色管理</span>
      <el-button @click="handleAdd">添加角色</el-button>
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
          width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          label="名称"
          align="center">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间" align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handledele(scope.row)" type="text" size="small">删除</el-button>
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
  import axios from 'axios'
import qs from "qs"
  import {RoleList,RoleDelete} from '../../api/role.js'
  export default{
    name:'role',
    data () {
      return{
       list:[],
        total:0,
        currentPage: 1,
        pageSize:0,
        totalCount:0,
        money:'',
        page:1,

      }
    },
    methods:{
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      // 删除角色
      handledele(row){
        // console.log(row)
      const data = qs.stringify({
        id:row.id
      })
        RoleDelete(data).then(this.hanledeteSucc.bind(this))
      },
      hanledeteSucc(res){
        console.log(res)
        const data = res.data
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
        }
      },
      handleCurrentChange(val){
        this.page = val
        const data = qs.stringify({
          page: val,
        })
        RoleList(data).then(this.getSucc.bind(this))
      },

      handleClick(row){
        console.log(row)
        this.$router.push('/roledetail?id='+row.id)
      },
      handleAdd(){
        this.$router.push('/addrole')
      },
      //获取角色权限列表信息
      getdata(){
        RoleList().then(this.getSucc.bind(this))
      },
      getSucc(res){
        console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
          this.list = data.info.data
          this.total = data.info.total
          this.currentPage = Number(data.info.current_page)
          this.totalCount = data.info.total
          this.pageSize = data.info.per_page
        }
      },

    },
    created(){
      this.getdata()
    }

  }
</script>
<style scoped>
  @import "../../assets/css/shoplist.css";
  .publish-task-top>>>.el-button{
    float:right;
    margin-right:20px;
    padding:10px 20px;
    margin-top:10px;
  }

</style>
