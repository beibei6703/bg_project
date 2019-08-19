import Axios from "@/util/request"

export const Menu = data => Axios({ // 用户列表
  method: 'post',
  url: 'admin/index/menu',
  data
})
//admin/user/logout后台退出
export const Logout = data => Axios({ // 用户列表
  method: 'post',
  url: 'admin/user/logout',
  data
})
