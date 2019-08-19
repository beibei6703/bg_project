<template>
  <div class="wrapper">
    <div class="header_shop">
      <span class="blueColor">商家待审核&nbsp;> </span>
      <span>商家详情</span>
    </div>
    <div class="shop_info">
      <p class="info_tit">店铺基本信息</p>
      <div class="shop_one">
        <div class="shopname">
          <span class="titles">店铺名称：</span>
          <span>{{items.name}}</span>
        </div>
        <div class="rzmobil">
          <span class="titles">入住手机号：</span>
          <span>{{items.mobile}}</span>
        </div>
      </div>
      <div class="shop_one">
        <div class="shopname">
          <span class="titles">主营类目：</span>
          <span>{{items.cate_id}}</span>
        </div>
        <div class="rzmobil marginleft">
          <span class="titles">店铺类型：</span>
          <span>{{items.type}}</span>
        </div>
      </div>
      <div class="shop_one">
        <div class="shopname">
          <span class="titles">地址：</span>
          <span>{{items.province+"/"+items.city+"/"+items.town+"/"+items.address}}</span>
        </div>
      </div>
    </div>
    <div class="id_info">
      <p class="info_tit">身份信息</p>
      <div class="identityCon">
        <span>身份证照片</span>
        <img :src="items.idcard_up" alt=""/>
        <img :src="items.idcard_down" alt=""/>
      </div>
      <div class="identityCon" v-if="items.type!='个人'">
        <span>营业执照照片</span>
        <img :src="items.business_license" alt=""/>
      </div>
      <div class="shopname" v-if="items.type!='个人'">
        <span class="titles">公司负责人姓名：</span>
        <span>{{items.corp_contact}}</span>
      </div>
    </div>
    <div class="bottom_info">
      <el-button @click="audit(items.id)">审核通过</el-button>
      <el-button @click="no_audit(items.id)">审核不通过</el-button>
      <div>
        <span class="result">不通过部分：</span>
        <el-select v-model="part" placeholder="店铺基本信息">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

    </div>
    <div class="textCon">
      <span class="result f">不通过原因：</span>
      <el-input style="width: 37%;margin-left: 160px;"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="reason">
      </el-input>
    </div>

  </div>

</template>
<script>
  import qs from 'qs'
import {BussinessEdit,BussinessDetail} from '../../api/shop'
  export default {
    name: 'failcheck',
    data() {
      return {
        items: '',
        options: [{
          value: 1,
          label: '身份信息'
        }, {
          value: 2,
          label: '店铺基本信息'
        }, {
          value: 3,
          label: '全部'
        }],
        part: '',
        reason: ""
      }
    },
    created() {
      const data = qs.stringify({
        id: this.$route.query.id
      })
      // this.ajax(this.business_detail, data,
      BussinessDetail(data).then( res => {
        if(res.data.status == 1 && res.data.info){
          this.items = res.data.info
          console.log(this.items)
          this.part = this.items.part
          this.reason = this.items.reason
        }else{
          this.mistake(res)
        }

      })
    },
    methods: {
      no_audit(id) {
        if (this.part != '' && this.reason != '') {
          const data = qs.stringify({
            id: id,
            part: this.part,
            reason: this.reason,
            status: 2
          })
          // this.ajax(this.business_edit, data,
          BussinessEdit(data).then(res => {
            if(res.ddata.status==1){
              this.succeed(res)
              this.$router.push({path: '/shopcheck'});
            }else{
              this.mistake(res)
            }

          })
        } else {
          this.$message({
            message: '请填写不通过原因',
            type: 'error'
          });
        }

      },
      audit(id) {
        const data = qs.stringify({
          id: id,
          status: 1
        })
        // this.ajax(this.business_edit, data,
        BussinessEdit(data).then(res => {
          if(res.data.status==1){
            this.succeed(res)
            this.$router.push({path: '/shoplist'});
          }else{
            this.mistake(res)
          }

        })
      }
    }
  }
</script>
<style scoped>
  @import '../../assets/css/shopdetail.css';
  .result{
    display: block;
    float:left;
    width:100px;
    text-align: right;
    line-height: 46px;
  }
  .f{
    margin-left:18px;
  }
  .textCon{
    margin-top:20px;
  }
  .textCon>>>.el-textarea{
    margin-left:30px !important;
  }
</style>
<style>
  .el-select-dropdown {
    margin-left: 20px;
  }
</style>
