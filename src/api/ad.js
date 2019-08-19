import Axios from "@/util/request"
export const UserEdit = data => Axios({ // 用户编辑
  method: 'post',
  url: 'admin/home/edit',
  data
})

export const PlaceList = (data=1) => Axios({ // 广告位列表
  method: 'get',
  url: 'admin/place?page='+data,
})
export const PlaceAdd = data => Axios({ // 广告位置新增
  method: 'post',
  url: 'admin/place',
  data
})

//admin/place/
export const adDelete = data => Axios({ // 广告位删除列表
  method: 'delete',
  url: 'admin/place/'+data,
  data
})
export const adEdit = data => Axios({ // 广告位编辑
  method: 'put',
  url: 'admin/place/'+data.id,
  data
})
export const PlaceDetail = data => Axios({ // 广告位置
  method: 'get',
  url: 'admin/place/'+data,
  data
})

// //admin/place/advertise/
export const AdList = data=> Axios({ // 广告列表
  method: 'get',
  url: 'admin/place/advertise/'+data.id+'?page='+data.page,
  data
})
// export const AdListPage = data => Axios({ //
//   method: 'get',
//   url: 'admin/place/advertise/'+data.id,
//   data
// })

// 启用
export const Enable = data => Axios({
  method: 'post',
  url: 'admin/advertise/enable',
  data
})
export const Disable = data => Axios({
  method: 'post',
  url: 'admin/advertise/disable',
  data
})
//admin/advertise/
export const AdDElete = data => Axios({
  method: 'delete',
  url: 'admin/advertise/'+data,
  data
})
export const AdvertiseEdit = data => Axios({
  method: 'get',
  url: 'admin/advertise/'+data,
  data
})
//admin/advertise/
export const AdvertiseSub = data => Axios({
  method: 'put',
  url: 'admin/advertise/'+data.id,
  data
})


//admin/place/option下拉选择

export const AdChoose = data => Axios({ //
  method: 'get',
  url: 'admin/place/option',
  data
})
//admin/advertise添加广告
export const AdvertiseAdd = data => Axios({ //
  method: 'post',
  url: 'admin/advertise',
  data
})
// business/index/qiniu
export const qiniu_cdn_token = data => Axios({ // 账号权限编辑信息
  method: 'post',
  url: 'business/index/qiniu',
  data
})
// //添加账号
// export const AccountAdd = data => Axios({ // 账号权限编辑信息
//   method: 'post',
//   url: 'admin/user/add',
//   data
// })
