import Axios from "@/util/request"

export const Login = data => Axios({ // 用户列表
  method: 'post',
  url: 'admin/user/login',
  data
})
export const AccountDetail = data => Axios({ // 账号信息
  method: 'post',
  url: 'admin/user/detail',
  data
})

// //admin/user/propwd
export const changePsw = data => Axios({ // 修改密码
  method: 'post',
  url: 'admin/user/propwd',
  data
})
// //admin/home/detail
// export const UserDetail = data => Axios({ // 用户详情
//   method: 'post',
//   url: 'admin/home/detail',
//   data
// })
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
