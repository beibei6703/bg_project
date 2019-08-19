<template>
	<div>
		<p class="addCon" @click="dialogFormVisible = true"><i class="el-icon-circle-plus"></i>新增</p>
		<el-dialog title="新增banner" :visible.sync="dialogFormVisible">
		  <div class="head_dia">
			  <span>背景图片</span>
			  <el-upload
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  :on-remove="handleRemove">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<span class="describe">banner图大小为 750px * 256px 格式为 jpg、png</span>
		  </div>
		  <p class="inputCon">
		  	<span>链接</span>
		  	<el-input></el-input>
		  </p>
		  <p class="inputCon">
		  	<span>活动内容</span>
		  	<el-input
			  type="textarea"
			  :autosize="{ minRows: 2, maxRows: 4}"
			  placeholder="请输入内容">
			</el-input>
		  </p>
		  <p class="inputCon">
		  	<span>banner位置</span>
		  	  <el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
		  </p>
		  <div class="btns">
		  	<el-button type="primary" @click="add">保存</el-button>
		  	<el-button>取消</el-button>
		  </div>
				<!--<el-dialog :visible.sync="dialogVisible">
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>-->
			  <!--<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
			  </div>-->

		</el-dialog>
		<p class="tit_info">顶部轮播banner</p>
		<div class="con_banner">
			<div class="detail_banner" >
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button @click="deleteCon(val)">删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner" v-for ="(item,i) in listinfo1" :key="i">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button  @click="deleteCon(i)">删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<!--<div class="detail_banner">-->
				<!--<div class="left_banner">-->
					<!--<img src="../../assets/logo.png" alt="" />-->
					<!--<el-button>删除</el-button>-->
				<!--</div>-->
				<!--<div class="right_banner">-->
					<!--<p class="one_detail">-->
						<!--<span class="titles">链接</span>-->
						<!--<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>-->
						<!--<span class="titles tops">活动内容</span>-->
						<!--<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>-->
					<!--</p>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div class="detail_banner">-->
				<!--<div class="left_banner">-->
					<!--<img src="../../assets/logo.png" alt="" />-->
					<!--<el-button>删除</el-button>-->
				<!--</div>-->
				<!--<div class="right_banner">-->
					<!--<p class="one_detail">-->
						<!--<span class="titles">链接</span>-->
						<!--<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>-->
						<!--<span class="titles tops">活动内容</span>-->
						<!--<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>-->
					<!--</p>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div class="detail_banner">-->
				<!--<div class="left_banner">-->
					<!--<img src="../../assets/logo.png" alt="" />-->
					<!--<el-button>删除</el-button>-->
				<!--</div>-->
				<!--<div class="right_banner">-->
					<!--<p class="one_detail">-->
						<!--<span class="titles">链接</span>-->
						<!--<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>-->
						<!--<span class="titles tops">活动内容</span>-->
						<!--<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>-->
					<!--</p>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div class="detail_banner">-->
				<!--<div class="left_banner">-->
					<!--<img src="../../assets/logo.png" alt="" />-->
					<!--<el-button>删除</el-button>-->
				<!--</div>-->
				<!--<div class="right_banner">-->
					<!--<p class="one_detail">-->
						<!--<span class="titles">链接</span>-->
						<!--<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>-->
						<!--<span class="titles tops">活动内容</span>-->
						<!--<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>-->
					<!--</p>-->
				<!--</div>-->
			<!--</div>-->

		</div>
		<p class="tit_info">中间轮播banner</p>
		<div class="con_banner">
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
		</div>
		<p class="tit_info">中间轮播banner</p>
		<div class="con_banner">
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
			<div class="detail_banner">
				<div class="left_banner">
					<img src="../../assets/logo.png" alt="" />
					<el-button>删除</el-button>
				</div>
				<div class="right_banner">
					<p class="one_detail">
						<span class="titles">链接</span>
						<span class="describe">www.leiyugroup.com/mail/banner/index.htm</span>
						<span class="titles tops">活动内容</span>
						<span class="describe tops">这主要是一个什么活动，主要是做什么的！！！</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  const baseInfo =[
    {tit_link:'链接',linkCon:null},
    {tit_act:'活动内容',activeCon:null},
  ];
	export default {
		name: 'homebanner',
		data(){
			return{
			  listinfo1:[baseInfo],
				 dialogImageUrl: '',
       			 dialogVisible: false,
				dialogFormVisible: false,
		        form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth: '120px',
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
		        value: ''
			}
		},
		 methods: {
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePictureCardPreview(file) {
	        this.dialogImageUrl = file.url;
	        this.dialogVisible = true;
	      },
       add(){
         this.listinfo1.push(baseInfo);
        this. dialogFormVisible = false
       },
       deleteCon(index){
	        console.log(index)
         this.listinfo1.splice(index,1);
       },
       getdata(){
         axios.get(this.advertise_port, {
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'token': localStorage.getItem("token")
           }

         })
            .then(this.getSucc.bind(this))
       },
       getSucc(res){
	          console.log(res)
       }
    	},
    created(){
		  this.getdata()
    }
	}
</script>
<style scoped>
	@import '../../assets/css/sales.css';
	.inputCon>span{
   	display: block;
   	float: left;
   	text-align: right;
   	width:80px;
   	margin-right:15px;

   }
	.inputCon>>>.el-input{
   	width:443px;
   	height:36px;
   }
   .inputCon>>>.el-input__inner{
   	width:443px;
   	height:36px;
   }
   .inputCon>>>.el-textarea{
   	width:443px;
   }

</style>
<style>
	.el-dialog{
		width:632px;
		height:466px;

	}
	.head_dia{
		width:100%;
		height:134px;
	}
	.head_dia>span{
		display: block;
		float:left;
		margin-left:62px;
		margin-right:22px;
	}
   .describe{
   	display:block;
   	float:left;
   	margin-top:10px;
   }
   .el-upload{
   	float: left;
   	margin-right:66px;
   }
   .inputCon{
   	width:100%;
   	margin-top:20px;
   }

</style>
