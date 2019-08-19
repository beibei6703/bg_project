<template>
  <div class="wraper">
    <!-- <div>保证金</div> -->
    <div class="publish-task-top">
      <span>模板名称：{{name}}</span>
      <el-button @click="temlp_add('add')">新增属性</el-button>
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
          width="80">
        </el-table-column>
        <el-table-column
          prop="attr_name"
          label="字段名称"
          width="130">
        </el-table-column>
        <el-table-column
          prop="attr_title"
          label="属性名称">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="temlp_add(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="temlp_delete(scope.row.id)"  type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="模板详情" class="manuscript" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="130px" class="f demo-form">
        <el-form-item label="字段名称："prop="attr_name" :rules="[{ required: true, message: '请输入字段名称', trigger: 'blur' }]">
          <el-input v-model="form.attr_name" placeholder="请输入字段名称" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="属性名称："prop="attr_title" :rules="[{ required: true, message: '请输入属性名称', trigger: 'blur' }]">
          <el-input v-model="form.attr_title" placeholder="请输入属性名称" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="属性类型：" prop="type" :rules="[{ required: true, message: '请输入属性类型', trigger: 'change' }]">
          <el-select v-model="form.type" placeholder="请选择" @change="selects" style="display: inline-block">
            <template v-for="item in attrtype">
              <el-option :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选项内容："v-if="selects_radio">
          <el-tag
            :key="tag"
            v-for="tag in form.option"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">添加选项内容</el-button>
        </el-form-item>
        <el-form-item label="默认值：">
          <el-input v-model="form.value" placeholder="请输入默认值" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="验证规则：">
          <el-checkbox-group  v-model="form.rule">
            <el-checkbox v-for="city in attrrule" :label="city.value" :key="city.label">{{city.label}}</el-checkbox>
          </el-checkbox-group>
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
  import {
    TemplateAttrRule,
    TemplateAttrType,
    TemplateAttrList,
    TemplateAttrDetlete,
    TemplateAttrDetail,
    TemplateAttrAdd,
    TemplateAttrEdit,
  } from '../../api/template'
  export default{
    name:'tep_attr',
    data () {
      return{
        attrtype:[],
        attrrule:[],
        name:this.$route.query.name,
        content: 0,
        tags: true,
        selects_radio:false,
        add_edit:false,
        form: {
          template_id:this.$route.query.id,
          type:'',
          attr_name: '',
          attr_title:'',
          rule:[],
          option: [],
          value:'',
        },
        rules:{
          attr_name:[{ required: true, message: '请输入内容', trigger: 'blur' }],
          attr_title:[{ required: true, message: '请输入内容', trigger: 'blur' }],
          type:[{ required: true, message: '请选择内容', trigger: 'change' }],
        },
        inputVisible: false,
        inputValue:'',
        tableData: [],
        dialogFormVisible:false,
        page:1
      }
    },
    created(){

      TemplateAttrType().then(res=>{
          this.attrtype=res.data.info
      })
      TemplateAttrRule().then(res=>{
        this.attrrule=res.data.info
      })
      this.information()
    },
    methods:{
      typeIndex(index){
        return index + (this.page-1)*this.pageSize + 1
      },
      selects(){
        if(this.form.type=='radio'||this.form.type=='select'){
          this.selects_radio=true
        }else{
          this.selects_radio=false
        }
      },
      handleClose(tag) {
        this.form.option.splice(this.form.option.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          if (this.content == 0) {
            this.form.option = new Array()
            this.form.option.push(inputValue);
            this.content = 1
          } else {
            for (var i = 0; i < this.form.option.length; i++) {
                this.tags = true
                if (this.form.option[i] == inputValue) {
                  this.tags = false
                  this.$message({
                    showClose: true,
                    message: '标签不能重复',
                    type: 'error'
                  });
                  return;
                } else {
                  this.tags = true
                }
            }
            if (this.tags) {
              this.form.option.push(inputValue);
            }
          }
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      information(){
        var data = qs.stringify({
          temp_id:this.$route.query.id
        })

          TemplateAttrList(data).then(res=>{
          if(res.data.status==1){
            this.tableData=res.data.info
          }else{
            this.mistake(res)
          }
        })
      },
      temlp_delete(value){
        var data = qs.stringify({
          id: value
        })
        TemplateAttrDetlete(data).then(res=>{
          if(res.data.status==1){
            this.succeed(res)
            this.information()
          }else{
            this.mistake(res)
          }

        })
      },
      temlp_add(value){
        this.dialogFormVisible=true
        if(value=='add'){
          this.add_edit=true
          this.form={
            template_id:this.form.template_id,
            type:'',
            attr_name: '',
            attr_title:'',
            rule:[],
            option: [],
            value:'',
          }
        }else{
          this.add_edit=false
          var data = qs.stringify({
            id:value
          })
          TemplateAttrDetail(data).then(res=>{
            this.form=res.data.info
            this.form.rule= res.data.info.rule.split("|")
            if(res.data.info.type=='radio'||res.data.info.type=='select'){
              this.selects_radio=true
              var arr=[]
              for(var i=0;i<res.data.info.option.length;i++){
                arr.push(res.data.info.option[i].label)
              }
              this.form.option=arr
            }else{
              this.selects_radio=false
            }
          })

        }
      },

      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = qs.stringify(this.form)
            if(this.add_edit){
              TemplateAttrAdd(data).then(res=>{
                if(res.data.status==1){
                  this.succeed(res)
                  this.dialogFormVisible=false
                  this.information()
                }else{
                  this.mistake(res)
                  this.dialogFormVisible=true
                }

              })
            }else{

              TemplateAttrEdit(data).then(res=>{
                if(res.data.status==1){
                  this.succeed(res)
                  this.dialogFormVisible=false
                  this.information()
                }else{
                  this.mistake(res)
                  this.dialogFormVisible=true
                }
              })
            }
          }else {
            this.$message({
              showClose:true,
              message: '请输入必须内容',
              type: 'error'
            });
            return false;
          }
        })
      },
    }
  }
</script>
<style scoped>
  @import "../../assets/css/shoplist.css";
  .publish-task-top>>>.el-button{
    float:right;
    margin-right:20px;
    padding:8px 20px;
    margin-top:10px;
  }
</style>
<style>
  .manuscript .el-dialog{
    width: 33%;
    height: auto;
  }
  .manuscript .el-dialog__body{
    padding: 30px 70px;
  }
  .manuscript .el-checkbox{
    margin-right: 30px;
  }
  .manuscript .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
</style>
