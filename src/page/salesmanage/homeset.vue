<template>
	<div>
		<p class="regularon">
      <span>广告分类</span>
      <el-button @click="handleAdd">添加</el-button>
    </p>
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
          prop="name"
          label="标识"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          label="名称"
          align="center">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
        width="180"
          align="center">
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="status"-->
          <!--label="状态">-->
          <!--<template slot-scope="scope">-->
            <!--<el-switch-->
              <!--:value="scope.row.status"-->
              <!--v-model="scope.row.status"-->
              <!--@change="handleChangeStatus(scope.row.id,scope.row.status)"-->
            <!--&gt;-->
            <!--</el-switch>-->
          <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column
          label="操作"align="center">
          <template slot-scope="scope">
            <el-button @click="getEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="getDelet(scope.row)" type="text" size="small">删除</el-button>
            <el-button @click="getAd(scope.row)" type="text" size="small">广告</el-button>
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
  import {UserEdit,PlaceList,adDelete} from '../../api/ad.js'
  import bus from '../../bus.js'
	export default {
		name: 'homeset',
		data(){
			return {
        total:0,
        page:1,
        currentPage: 1,
        pageSize:0,
        totalCount:0,
			  list:[],
        limit:1,
			}
		},
    methods:{
		  //广告
      getAd(val){
        this.$router.push({path:'/ad',query:{
          id:val.id,
            name:val.title
          }})
        // this.limit = val.limit
      },
      handleAdd(){
        this.$router.push('/add')
      },
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      handleChangeStatus(value,label){
        // console.log(value+"..."+label)
        var status
        label==true?status=1:status=0;
        const data = qs.stringify({
          status: status,
          id: value
        })
        UserEdit(data) .then(this.handleEditSucc.bind(this))

      },
      handleCurrentChange(val){
        this.page = val
        const data ={
          page: val,
        }
        console.log(data)
        PlaceList(val).then(this.getSucc.bind(this))
      },
		  getdata(){
        PlaceList().then(this.getSucc.bind(this))
      },
      getSucc(res){
		    // console.log(res)
        const data = res.data
        if(data.status == 1 && data.info){
		      this.list = data.info.data
          this.total = data.info.total
          this.currentPage = Number(data.info.current_page)
          this.totalCount = data.info.total
          this.pageSize = data.info.per_page
        }
      },
      getEdit(val){
        this.$router.push('/addetail?id=' + val.id )
      },
      getDelet(row){
        adDelete(row.id).then(this.handleDeleSucc.bind(this))
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
      }
    },
    created(){
		  this.getdata()
    },
	}
</script>
<style scoped>
  /*@import '../../assets/css/sales.css';*/
  .regularon{
    width:100%;
    height:50px;
    line-height: 50px;
    border-bottom:1px solid #e4e7ed ;
    margin-bottom:20px;
  }
  .regularon>span{
    border-left:2px solid #FF0000;
    display: block;
    width:100px;
    height:20px;
    float:left;
    margin-top:15px;
    line-height:20px;
    text-align: center;
  }
  .regularon>>>.el-button{
    float:right;
  }
</style>
