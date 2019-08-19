<template>
  <div class="wraper">
    <div class="publish-task-top">
      <span>菜单管理</span>
      <el-button @click="temlp_add('add')">新增模板</el-button>
    </div>
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data5"
          node-key="id"
          :default-expanded-keys="[30]"
          :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.data.title }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            v-if="node.data.pid==0"
            @click="append(node)">
            添加
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="remove(node, data)">
            删除
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="edit(node, data)">
            编辑
          </el-button>
        </span>
      </span>
        </el-tree>
      </div>
    </div>
    <el-dialog title="菜单详情" class="manuscripts" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="130px" class="f demo-form">
        <el-form-item label="父级菜单：">
          {{parent}}
        </el-form-item>
        <el-form-item label="后台路由：">
          <el-input v-model="form.name" placeholder="请输入内容" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="菜单名称：">
          <el-input v-model="form.title" placeholder="请输入内容" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="前台路由：">
          <el-input v-model="form.url" placeholder="请输入内容" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="class名：">
          <el-input v-model="form.class" placeholder="请输入内容" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="状态：" v-if="status">
          <el-switch
            v-model="value"
            active-text="显示"
            inactive-text="隐藏">
          </el-switch>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="primary" style="text-align: center" @click="submit('form')">提交</el-button>
        </div>

      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  import {MenuList,MenuAdd,MenuEdit,MenuDelete,MenuDetail} from '../../api/menu'
  let id = 1000;
  export default {
    name: 'menus',

    data() {
      return {
        idArr:[],
        data5: [],
        form: {
          pid: 0,
          name: "",
          title: '',
          is_visible: '',
          url: '',
      class:'',
        },
        parent: '顶级菜单',
        value: true,
        rules: {},
        dialogFormVisible: false,
        input: '',
        status: true,
        temp_id: '',
        data: '',
        click_status: '新增'
      }
    },
    created() {
      this.information()
    },
    methods: {
      information() {
        var data = qs.stringify({
          temp_id: this.$route.query.id
        })
        MenuList(data).then(res => {

          if (res.data.status == 1) {
            var arr = []
            for (var i in res.data.info) {
              arr.push(res.data.info[i])
            }
            this.data5 = arr
            this.data5.forEach(m=>{
              this.idArr.push(m.id)
            })
            console.log(this.idArr)

          } else {
            this.mistake(res)
          }
        })
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.value == true ? this.form.is_visible = 1 : this.form.is_visible = 0;
            var data = qs.stringify(this.form)
            if (this.click_status == '新增') {

              MenuAdd(data).then(res => {
                if (res.data.status == 1) {
                  this.succeed(res)
                  this.dialogFormVisible = false
                  this.information()
                  this.form = {
                    pid: 0,
                    name: "",
                    title: '',
                    is_visible: '',
                    url: ''
                  }
                }else{
                  this.mistake(res)
                }
              })
            } else {

              MenuEdit(data).then(res => {
                if (res.data.status == 1) {
                  this.succeed(res)
                  this.dialogFormVisible = false
                  this.information()
                  this.form = {
                    pid: 0,
                    name: "",
                    title: '',
                    is_visible: '',
                    url: ''
                  }
                }else{
                  this.mistake(res)
                }
              })
            }

          }
        })
      },
      temlp_add() {
        this.dialogFormVisible = true
        this.form.id=''
        this.parent='顶级菜单'
      },
      append(data) {
        this.dialogFormVisible = true
        this.form = {
          name: "",
          title: '',
          is_visible: '',
          url: ''
        }
        this.data = data
        this.form.pid = this.data.data.id
        this.click_status = '新增'
        this.parent=this.data.data.title

      },
      remove(node, datas) {
        var id = datas.id
        var data = qs.stringify({
          id: id
        })

        MenuDelete(data) .then(res => {
          if (res.data.status == 1) {
            this.succeed(res)
            this.information()
          }
        })
      },
      edit(node, datas) {
        this.dialogFormVisible = true
        this.click_status = '编辑'
        var id = datas.id
        var data = qs.stringify({
          id: id
        })
        MenuDetail(data).then(res => {
          this.parent = res.data.info.parent
          this.form.pid = res.data.info.pid
          this.form.name = res.data.info.name
          this.form.title = res.data.info.title
          this.form.is_visible = res.data.info.is_visible
          this.form.id = res.data.info.id
          this.form.url = res.data.info.url
          this.form.class= res.data.info.class
          this.form.is_visible == 1 ? this.value = true : this.value = false;
        })
      },
    }
  }
</script>
<style scoped>
  @import "../../assets/css/shoplist.css";

  .publish-task-top > > > .el-button {
    float: right;
    margin-right: 20px;
    padding: 8px 20px;
    margin-top: 10px;
  }
</style>
<style>
  .manuscripts .el-dialog {
    width: 33%;
  }

  .manuscripts .el-dialog__body {
    padding: 30px 120px;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
