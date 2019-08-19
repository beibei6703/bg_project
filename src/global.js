exports.install = function (Vue, options) {
  //全局变量七牛URL
  Vue.prototype.qiniu_cdn = "http://cdn1.zuanxiaofei.com/"
//接口url
//   Vue.prototype.baseURL = "http://stu/"

//  任务列表中任务详情
  Vue.prototype.task_details = function (item) {
    this.$router.push(
      {
        path: '/details',
        query: {
          id: item
        }
      }
    )
  }

  //点击用户头像用户详情
  Vue.prototype.user_details = function (item) {
    this.$router.push(
      {
        path: '/userdetails',
        query: {
          id: item
        }
      }
    )
  }

  //点击订单id
  Vue.prototype.order_details = function (item) {
    this.$router.push(
      {
        path: '/orderdetails',
        query: {
          id: item
        }
      }
    )
  }

  //查看评价
  Vue.prototype.speed = 1
  Vue.prototype.synthesize = 1
  Vue.prototype.order_content = 1

  // 待评价
  Vue.prototype.no_evaluate = 0

  // 分页
  Vue.prototype.total = 0
  Vue.prototype.currentPage = 0
  Vue.prototype.pageSize = 0
  Vue.prototype.totalCount = 0
  Vue.prototype.page_fun = function (res) {
    const data = res.data
    Vue.prototype.total = data.info.total
    Vue.prototype.currentPage = Number(data.info.current_page)
    Vue.prototype.totalCount = data.info.total
    Vue.prototype.pageSize = data.info.per_page
  }

  //任务列表状态切换
  Vue.prototype.order_activeIndex = '1'
  Vue.prototype.task_activeIndex = '1'

//成功回调
  Vue.prototype.succeed = function (response) {
    this.$message({
      showClose: true,
      type: 'success',
      message: response.data.msg
    });
  }
  //  失败回调
  Vue.prototype.mistake = function (response) {
    this.$message({
      showClose: true,
      message: response.data.msg,
      type: 'error'
    });
  }
};
