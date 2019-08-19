import Axios from "@/util/request"

export const UserList = data => Axios({ // 用户列表
  method: 'post',
  url: 'admin/home/index',
  data
})
//admin/home/edit
export const UserEdit = data => Axios({ // 用户编辑
  method: 'post',
  url: 'admin/home/edit',
  data
})
//admin/home/detail
export const UserDetail = data => Axios({ // 用户详情
  method: 'post',
  url: 'admin/home/detail',
  data
})
//
// export const addAddress = data => Axios({ // 添加地址
//   method: 'post',
//   url: 'api/address/add_shipping_address/',
//   data
// })
//
// export const editAddress = data => Axios({ // 地址编辑
//   method: 'post',
//   url: 'api/address/get_shipping_address_one/',
//   data
// })
