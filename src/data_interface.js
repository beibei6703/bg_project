exports.install = function (Vue, options) {
  //全局变量七牛URL
  Vue.prototype.qiniu_cdn = "http://cdn1.zuanxiaofei.com/"
// 接口url
//   Vue.prototype.baseURL = "http://api/"
  Vue.prototype.baseURL = "https://apitest.zuanxiaofei.com/"
  //admin/bill/yearfile
  Vue.prototype.yearexcel_port= Vue.prototype.baseURL+'admin/bill/yearfile'
  //   //资金管理交易明细导出
  Vue.prototype.deal_dayfile= Vue.prototype.baseURL+'admin/bill/dayfile'
//   //资金管理待审核导出
  Vue.prototype.deposit_download= Vue.prototype.baseURL+'admin/money/download'

  // 退出
//   Vue.prototype.logout=Vue.prototype.baseURL+'business/business/logout'
// //  请求七牛云token
//   Vue.prototype.qiniu_cdn_token=Vue.prototype.baseURL+'business/index/qiniu'
  //  请求类目
 //登录
 //  Vue.prototype.login_port = Vue.prototype.baseURL+'admin/user/login'
  //layut 左侧菜单
  // Vue.prototype.menu = Vue.prototype.baseURL+'admin/index/menu'
  // 模板列表
  // Vue.prototype.template_list = Vue.prototype.baseURL+'admin/template/index'
  // 模板列表状态修改
  // Vue.prototype.template_status = Vue.prototype.baseURL+'admin/template/status'
  // 模板列表删除
  // Vue.prototype.template_delete = Vue.prototype.baseURL+'admin/template/delete'
  // 模板列表新增
  // Vue.prototype.template_add = Vue.prototype.baseURL+'admin/template/add'
  // 模板列表编辑
  // Vue.prototype.template_edit = Vue.prototype.baseURL+'admin/template/edit'
  // 模板列表详情
  // Vue.prototype.template_detail = Vue.prototype.baseURL+'admin/template/detail'
  // 属性类别
  // Vue.prototype.template_attrtype = Vue.prototype.baseURL+'admin/index/attrtype'
  // 属性规则
  // Vue.prototype.template_attrrule = Vue.prototype.baseURL+'admin/index/attrrule'
  // 属性新增
  // Vue.prototype.attributes_add = Vue.prototype.baseURL+'admin/attributes/add'
  // 属性列表
  // Vue.prototype.attributes_list = Vue.prototype.baseURL+'admin/attributes/index'
  // 属性删除
  // Vue.prototype.attributes_delete = Vue.prototype.baseURL+'admin/attributes/delete'
  // 属性详情
  // Vue.prototype.attributes_detail = Vue.prototype.baseURL+'admin/attributes/detail'
  // 属性编辑
  // Vue.prototype.attributes_edit = Vue.prototype.baseURL+'admin/attributes/edit'
  // 菜单新增
  // Vue.prototype.menu_add = Vue.prototype.baseURL+'admin/menu/add'
  // 菜单列表
  // Vue.prototype.menu_index = Vue.prototype.baseURL+'admin/menu/index'
  // 菜单删除
//   Vue.prototype.menu_delete = Vue.prototype.baseURL+'admin/menu/delete'
//   // 菜单详情
//   Vue.prototype.menu_detail = Vue.prototype.baseURL+'admin/menu/detail'
//   // 菜单删除
//   Vue.prototype.menu_edit = Vue.prototype.baseURL+'admin/menu/edit'
//   //角色
//   Vue.prototype.role_port = Vue.prototype.baseURL+'admin/role/index'
//   //编辑角色权限
//   Vue.prototype.role_detail_port = Vue.prototype.baseURL+'admin/role/detail'
//
//   Vue.prototype.role_edit_port = Vue.prototype.baseURL+'admin/role/edit'
//   //添加角色
//   Vue.prototype.role_add_port = Vue.prototype.baseURL+'admin/role/add'
//   // 删除角色
//   Vue.prototype.role_delete_port = Vue.prototype.baseURL+'admin/role/delete'
//   //角色所有菜单
//   Vue.prototype.menus_port = Vue.prototype.baseURL+'admin/index/menus'
//   // 用户账号列表
//   Vue.prototype.user_list_port = Vue.prototype.baseURL+'admin/user/index'
//   //获取用户职位
//   Vue.prototype.user_roles_port = Vue.prototype.baseURL+'admin/index/roles'
//   // 账号信息
//   Vue.prototype.user_detail_port = Vue.prototype.baseURL+'admin/user/detail'
//   //用户信息编辑
//   Vue.prototype.user_edit_port = Vue.prototype.baseURL+'admin/user/edit'
//   //删除账号
//   Vue.prototype.uesr_delete_port=Vue.prototype.baseURL+'admin/user/delete'
//   // 根据角色获取权限
//   Vue.prototype.user_rules_port=Vue.prototype.baseURL+'admin/index/rules'
//   //账号新增
//   Vue.prototype.user_add_port=Vue.prototype.baseURL+'admin/user/add'
//   // 修改密码
//   Vue.prototype.changepsw_port= Vue.prototype.baseURL+'admin/user/propwd'
//   // 商家列表
//   Vue.prototype.business_list= Vue.prototype.baseURL+'admin/business/index'
//   // 商家待审核
//   Vue.prototype.business_notcheck= Vue.prototype.baseURL+'admin/business/notcheck'
//   // 商家详情
//   Vue.prototype.business_detail= Vue.prototype.baseURL+'admin/business/detail'
//   // 商家编辑
//   Vue.prototype.business_edit= Vue.prototype.baseURL+'admin/business/edit'
//   // 商家待入驻
//   Vue.prototype.business_wait= Vue.prototype.baseURL+'admin/business/wait'
//   // 商家类目
//   Vue.prototype.business_cate= Vue.prototype.baseURL+'business/index/cate'
//   // 用户列表
//   Vue.prototype.user_list= Vue.prototype.baseURL+'admin/home/index'
//   //用户编辑
//   Vue.prototype.user_edit_list= Vue.prototype.baseURL+'admin/home/edit'
//   //用户详情
//   Vue.prototype.user_detail= Vue.prototype.baseURL+'admin/home/detail'
//   //任务列表
//   Vue.prototype.task_list_port= Vue.prototype.baseURL+'admin/task/index'
// //任务详情
//   Vue.prototype.task_detail_port= Vue.prototype.baseURL+'business/task/detail'
//   //入住状态修改
//   Vue.prototype.business_waitedit= Vue.prototype.baseURL+'admin/business/waitedit'
//   //资金管理账单列表
//   Vue.prototype.money_list= Vue.prototype.baseURL+'admin/money/index'
//   //资金管理账单头部
//   Vue.prototype.money_top= Vue.prototype.baseURL+'admin/money/top'
//   //资金管理账单类型
//   Vue.prototype.money_gettype= Vue.prototype.baseURL+'admin/money/gettype'
//   //资金管理账单详情
//   Vue.prototype.money_detail= Vue.prototype.baseURL+'admin/money/detail'
//   //资金管理提现列表
//   Vue.prototype.money_transfer= Vue.prototype.baseURL+'admin/money/transfer'

//   //提现申请撤销
//   Vue.prototype.money_revert= Vue.prototype.baseURL+'admin/money/revert'
//   //保证金总和
//   Vue.prototype.money_sumdeposit= Vue.prototype.baseURL+'admin/money/sumdeposit'
//   //保证金交易记录
//   Vue.prototype.money_deposit= Vue.prototype.baseURL+'admin/money/deposit'
//   //对公转账
//   Vue.prototype.money_topublic= Vue.prototype.baseURL+'admin/money/topublic'
//   //审核对公转账
//   Vue.prototype.money_account= Vue.prototype.baseURL+'admin/money/account'
//   //收据列表
//   Vue.prototype.receipt_list= Vue.prototype.baseURL+'admin/receipt/index'
//   //收据审核
//   Vue.prototype.receipt_status= Vue.prototype.baseURL+'admin/receipt/status'
//   //收据详情
//   Vue.prototype.receipt_detail= Vue.prototype.baseURL+'admin/receipt/detail'
//   //订单列表 admin/order/index
//   Vue.prototype.order_port= Vue.prototype.baseURL+'admin/order/index'
//   //admin/bill/month月汇总
//   Vue.prototype.month_port= Vue.prototype.baseURL+'admin/bill/month'
  //admin/bill/year年汇总
  // Vue.prototype.year_port= Vue.prototype.baseURL+'admin/bill/year'
  //place_port/admin/place广告位置
  // Vue.prototype.place_port= Vue.prototype.baseURL+'admin/place'
  // //广告位详情admin/place/:id
  // Vue.prototype.place_detail_port= Vue.prototype.baseURL+'admin/place/'
  // //admin/place/:id/advertise广告列表
  // Vue.prototype.advertise_port= Vue.prototype.baseURL+'admin/place/advertise/'
  // //admin/advertise
  // Vue.prototype.advertise_add_port= Vue.prototype.baseURL+'admin/advertise'
  // //admin/place/option下拉选择
  // Vue.prototype.place_option_port= Vue.prototype.baseURL+'admin/place/option'
  // //admin/advertise/:id广告详情admin/advertise/:id更新
  // Vue.prototype.advertise_detail_port= Vue.prototype.baseURL+'admin/advertise/'
  // ///admin/place/enable /admin/place/disable禁用启用
  // Vue.prototype.enble_port= Vue.prototype.baseURL+'/admin/advertise/enable'
  // Vue.prototype.disable_port= Vue.prototype.baseURL+'/admin/advertise/disable'
}
