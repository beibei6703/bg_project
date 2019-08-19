import Axios from "@/util/request"
//admin/template/index模板列表
export const TemplateList = data => Axios({ // 模板列表
  method: 'post',
  url: 'admin/template/index',
  data
})
// admin/template/status
export const TemplateStatus = data => Axios({ // 模板列表状态修改
  method: 'post',
  url: 'admin/template/status',
  data
})
// admin/template/delete
export const TemplateDelete = data => Axios({ // 模板列表删除
  method: 'post',
  url: 'admin/template/delete',
  data
})
//admin/template/add模板列表新增
export const TemplateAdd = data => Axios({ //
  method: 'post',
  url: 'admin/template/add',
  data
})
//admin/template/detail模板列表详情
export const TemplateDetail = data => Axios({ // 模板列表详情
  method: 'post',
  url: 'admin/template/detail',
  data
})
//admin/template/edit
export const TemplateEdit = data => Axios({ // 模板列表详情
  method: 'post',
  url: 'admin/template/edit',
  data
})
//admin/index/attrrule属性规则
export const TemplateAttrRule = data => Axios({ // 属性规则
  method: 'post',
  url: 'admin/index/attrrule',
  data
})
//admin/index/attrtype
export const TemplateAttrType = data => Axios({ // 属性类别
  method: 'post',
  url: 'admin/index/attrtype',
  data
})
// admin/attributes/index属性列表
export const TemplateAttrList = data => Axios({ // 属性列表
  method: 'post',
  url: 'admin/attributes/index',
  data
})
//admin/attributes/delete属性删除
export const TemplateAttrDetlete = data => Axios({ //
  method: 'post',
  url: 'admin/attributes/delete',
  data
})
//admin/attributes/detail
export const TemplateAttrDetail = data => Axios({ // 属性
  method: 'post',
  url: 'admin/attributes/detail',
  data
})
//admin/attributes/add属性新增
export const TemplateAttrAdd = data => Axios({ // 属性
  method: 'post',
  url: 'admin/attributes/add',
  data
})
//admin/attributes/edit属性编辑
export const TemplateAttrEdit = data => Axios({ // 属性
  method: 'post',
  url: 'admin/attributes/edit',
  data
})
//qiniu_cdn_token
export const qiniu_cdn_token = data => Axios({ // 账号权限编辑信息
  method: 'post',
  url: 'business/index/qiniu',
  data
})

