import Axios from "@/util/request"

export const AccountDelete = data => Axios({ // 账号删除
  method: 'post',
  url: 'admin/user/delete',
  data
})
//admin/user/index
export const AccountList = data => Axios({ // 账号列表
  method: 'post',
  url: 'admin/user/index',
  data
})
//admin/index/menus
export const RoleMenus = data => Axios({ // 获取全部角色权限菜单
  method: 'post',
  url: 'admin/index/menus',
  data
})
//admin/index/roles
export const AccountJob = data => Axios({ // 获取用户职位
  method: 'post',
  url: 'admin/index/roles',
  data
})
//admin/index/rules
export const AccountRules = data => Axios({ // 根据角色获取权限
  method: 'post',
  url: 'admin/index/rules',
  data
})
//admin/user/detail
export const AccountDetail = data => Axios({ // 账号信息
  method: 'post',
  url: 'admin/user/detail',
  data
})
//admin/user/edit
export const AccountEdit = data => Axios({ // 账号权限编辑信息
  method: 'post',
  url: 'admin/user/edit',
  data
})
//添加账号
export const AccountAdd = data => Axios({ // 账号权限编辑信息
  method: 'post',
  url: 'admin/user/add',
  data
})
