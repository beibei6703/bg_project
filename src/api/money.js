import Axios from "@/util/request"
//资金管理账单头部
export const MoneyTop = data => Axios({
  method: 'post',
  url: 'admin/money/top',
  data
})
// //admin/money/index资金管理账单列表
export const MoneyList = data => Axios({
  method: 'post',
  url: 'admin/money/index',
  data
})
//admin/business/wait资金管理账单类型
export const MoneyType = data => Axios({
  method: 'post',
  url: 'admin/money/gettype',
  data
})
//admin/business/detail
export const BussinessDetail = data => Axios({
  method: 'post',
  url: 'admin/business/detail',
  data
})
//admin/money/detail
export const MoneyDetail = data => Axios({
  method: 'post',
  url: 'admin/money/detail',
  data
})
//admin/money/transfer资金管理提现列表
export const withdrawList = data => Axios({ //资金管理提现列表
  method: 'post',
  url: 'admin/money/transfer',
  data
})

// admin/money/revert提现申请撤销
export const withdrawRevert = data => Axios({ // 商家编辑
  method: 'post',
  url: 'admin/money/revert',
  data
})
//admin/money/sumdeposit
export const SumDeposit = data => Axios({ //
  method: 'post',
  url: 'admin/money/sumdeposit',
  data
})
//admin/money/deposit
export const MoneyDeposit = data => Axios({ // 交易记录
  method: 'post',
  url: 'admin/money/deposit/',
  data
})

//admin/money/topublic对公转账
export const MoneyPublic = data => Axios({
  method: 'post',
  url: 'admin/money/topublic',
  data
})
//admin/money/account审核对公转账
export const MoneyAccount = data => Axios({
  method: 'post',
  url: 'admin/money/account',
  data
})
//admin/receipt/status收据审核
export const ReceiptStatuc = data => Axios({
  method: 'post',
  url: 'admin/receipt/status',
  data
})
//admin/receipt/index收据列表
export const ReceiptLIst = data => Axios({
  method: 'post',
  url: 'admin/receipt/index',
  data
})
//admin/receipt/detail收据详情
export const ReceiptDetail = data => Axios({
  method: 'post',
  url: 'admin/receipt/detail',
  data
})
//admin/bill/month月汇总
export const MonthBill = data => Axios({
  method: 'post',
  url: 'admin/bill/month',
  data
})
//admin/bill/year年汇总
export const YearBill = data => Axios({
  method: 'post',
  url: 'admin/bill/year',
  data
})


