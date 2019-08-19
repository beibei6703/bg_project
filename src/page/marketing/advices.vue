<template>
  <div>
    <div class="task-top f">
      <span class="fl">消息设置</span>
      <el-button plain class="fr"><router-link to="new_advices">新增消息</router-link></el-button>
    </div>
    <div class="table_tabs">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="address"
          label="创建时间">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        background
        　　　　　　 layout="total,  prev, pager, next, jumper"
        　　　　　　 :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "advices",
      data(){
        return {
          tableData: [{
            date: '1',
            name: '王小虎',
            address: '上海市普陀18 弄'
          }, {
            date: '2',
            name: '王小虎',
            address: '上海市普17 弄'
          }, {
            date: '3',
            name: '王小虎',
            address: '上海市普 弄'
          }, {
            date: '4',
            name: '王小虎',
            address: '上海市普弄'
          }],
        }
      },
      methods:{
        handleCurrentChange(){

        }
      }
    }
</script>

<style scoped lang="less">
  .task-top{
    padding-bottom: 10px;
    border-bottom:1px solid #888 ;
  span{
    display: inline-block;
    width: 95px;
    height: 30px;
    line-height: 30px;
  }
  .el-button{
    padding: 0;
    width: 95px;
    height: 30px;
    border-radius: 4px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);

  }
  }
</style>
