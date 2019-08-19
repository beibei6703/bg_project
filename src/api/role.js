import Axios from "@/util/request"

export const RoleList = data => Axios({ // 角色列表
  method: 'post',
  url: 'admin/role/index',
  data
})
//admin/home/edit

export const RoleDelete = data => Axios({ // 删除角色
  method: 'post',
  url: 'admin/role/delete',
  data
})
//admin/index/menus
export const RoleMenus = data => Axios({ // 获取全部角色权限菜单
  method: 'post',
  url: 'admin/index/menus',
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
