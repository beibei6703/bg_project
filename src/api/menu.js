import Axios from "@/util/request"
//admin/menu/index菜单新增
export const MenuList = data => Axios({ //
  method: 'post',
  url: 'admin/menu/index',
  data
})
//admin/menu/add
export const MenuAdd = data => Axios({ //
  method: 'post',
  url: 'admin/menu/add',
  data
})
// admin/menu/edit
export const MenuEdit = data => Axios({ //
  method: 'post',
  url: 'admin/menu/edit',
  data
})
//admin/menu/delete
export const MenuDelete = data => Axios({ // 添加地址
  method: 'post',
  url: 'admin/menu/delete',
  data
})
//admin/menu/detail
export const MenuDetail = data => Axios({ // 地址编辑
  method: 'post',
  url: 'admin/menu/detail',
  data
})
