import Axios from "@/util/request"

export const TaskList = data => Axios({ // 任务列表
  method: 'post',
  url: 'admin/task/index',
  data
})
//admin/home/edit
export const TaskDetail = data => Axios({ // 任务详情
  method: 'post',
  url: 'business/task/detail',
  data
})
//admin/order/index
export const OrderList = data => Axios({ // 获取任务订单列表
  method: 'post',
  url: 'admin/order/index',
  data
})
//admin/role/detail
export const RoleDetail = data => Axios({ // 获取角色权限详情
  method: 'post',
  url: 'admin/role/detail',
  data
})
//admin/role/edit
export const RoleEdit = data => Axios({ // 编辑角色权限
  method: 'post',
  url: 'admin/role/edit',
  data
})
//admin/role/add
export const RoleAdd = data => Axios({ // 角色添加权限
  method: 'post',
  url: 'admin/role/add',
  data
})
