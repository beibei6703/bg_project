import Axios from "@/util/request"

export const BussinessList = data => Axios({ // 商家列表
  method: 'post',
  url: 'admin/business/index',
  data
})
// //admin/business/edit
export const BussinessEdit = data => Axios({ // 商家编辑
  method: 'post',
  url: 'admin/business/edit',
  data
})
//admin/business/wait商家待入住
export const BussinessWait = data => Axios({ // 商家编辑
  method: 'post',
  url: 'admin/business/wait',
  data
})
//admin/business/detail
export const BussinessDetail = data => Axios({ // 商家编辑
  method: 'post',
  url: 'admin/business/detail',
  data
})

//admin/business/waitedit入住状态修改
export const BussinessWaitStatus = data => Axios({ // 商家编辑
  method: 'post',
  url: 'admin/business/waitedit',
  data
})

// admin/business/notcheck
export const BussinessNocheck = data => Axios({ // 商家编辑
  method: 'post',
  url: 'admin/business/notcheck',
  data
})
//business/index/cate商家类目
export const BussinessCate = data => Axios({ //
  method: 'post',
  url: 'business/index/cate',
  data
})

