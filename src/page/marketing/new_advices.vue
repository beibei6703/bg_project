<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/advices' }">消息设置</el-breadcrumb-item>
        <el-breadcrumb-item>新增消息</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="">
        <div class="details">
          <span>账号：</span>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="details">
          <span class="img">主图：</span>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div class="details">
          <span class="img">描述：</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea3">
          </el-input>
        </div>
        <div class="details">
          <span class="img">内容：</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea3">
          </el-input>
        </div>
        <div class="details">
          <span>地址链接：</span>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="details">
          <span>消息接收方：</span>
          <el-select v-model="value4" clearable placeholder="请选择"  @change="templat_category">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="details">
          <span>选择消息类型：</span>
          <el-select v-model="value3" clearable placeholder="请选择" @change="templat_category">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="details">
          <span class="img">附件：</span>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <div class="block">
            <el-button>确定</el-button>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "new_advices",
      data(){
          return {
            input:'',
            textarea3:'',
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value4: '选项2',
            value3: '选项3',
            fileList3: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          }
      },
      methods:{
        handleChange(file, fileList) {
          this.fileList3 = fileList.slice(-3);
        },
        templat_category(){

        }
      }
    }
</script>

<style scoped lang="less">
  .el-breadcrumb {
    padding-bottom: 10px;
    border-bottom: 1px solid #888;
    height: 30px;
    line-height: 30px;
  }
  .details {
    margin-top: 20px;
    .el-input {
      display: inline-block;
      width: 320px;
    }
    .el-textarea{
      width: 320px;
    }
    .img{
      vertical-align: top;
    }
    span {
      text-align: right;
      display: inline-block;
      width: 100px;
      margin-right: 20px;

    }
    .upload-demo{
      display: inline-block;
    }
  }
</style>
