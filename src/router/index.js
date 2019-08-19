import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/components/layout'

const Err = (resolve) =>{
  import ('@/components/err').then((module)=>{
    resolve(module)
  })
}
const Layout = (resolve) =>{
  import ('@/components/layout').then((module)=>{
    resolve(module)
  })
}
// import Shoplist from '@/page/businessmange/shoplist'
const Shoplist = (resolve) =>{
  import ('@/page/businessmange/shoplist').then((module)=>{
    resolve(module)
  })
}
// import Shopcheck from '@/page/businessmange/shopcheck'
const Shopcheck = (resolve) =>{
  import ('@/page/businessmange/shopcheck').then((module)=>{
    resolve(module)
  })
}
// import Shopin from '@/page/businessmange/shopin'
const Shopin = (resolve) =>{
  import ('@/page/businessmange/shopin').then((module)=>{
    resolve(module)
  })
}
// import Userlist from '@/page/usermanage/userlist'
const Userlist = (resolve) =>{
  import ('@/page/usermanage/userlist').then((module)=>{
    resolve(module)
  })
}

// import Account from '@/page/account/account'
const Account = (resolve) =>{
  import ('@/page/account/account').then((module)=>{
    resolve(module)
  })
}

// import Add_accout from '@/page/account/add_accout'
const Add_accout = (resolve) =>{
  import ('@/page/account/add_accout').then((module)=>{
    resolve(module)
  })
}
// import Advices from '@/page/marketing/advices'
const Advices = (resolve) =>{
  import ('@/page/marketing/advices').then((module)=>{
    resolve(module)
  })
}
// import New_advices from '@/page/marketing/new_advices'
const New_advices = (resolve) =>{
  import ('@/page/marketing/new_advices').then((module)=>{
    resolve(module)
  })
}
// import Home_set from '@/page/marketing/home_set'
const Home_set = (resolve) =>{
  import ('@/page/marketing/home_set').then((module)=>{
    resolve(module)
  })
}
// import Userdetail from '@/page/usermanage/userdetail'
const Userdetail = (resolve) =>{
  import ('@/page/usermanage/userdetail').then((module)=>{
    resolve(module)
  })
}
// import Tasklist from '@/page/task/tasklist'
const Tasklist = (resolve) =>{
  import ('@/page/task/tasklist').then((module)=>{
    resolve(module)
  })
}
// import Orderlist from '@/page/task/orderlist'
const Orderlist = (resolve) =>{
  import ('@/page/task/orderlist').then((module)=>{
    resolve(module)
  })
}
// import Orderdispute from '@/page/task/orderdispute'
const Orderdispute = (resolve) =>{
  import ('@/page/task/orderdispute').then((module)=>{
    resolve(module)
  })
}
// import Orderdetail from '@/page/task/orderdetail'
const Orderdetail = (resolve) =>{
  import ('@/page/task/orderdetail').then((module)=>{
    resolve(module)
  })
}
// import Taskdetail from '@/page/task/taskdetail'
const Taskdetail = (resolve) =>{
  import ('@/page/task/taskdetail').then((module)=>{
    resolve(module)
  })
}
// import Handledispute from '@/page/task/handledispute'
const Handledispute = (resolve) =>{
  import ('@/page/task/handledispute').then((module)=>{
    resolve(module)
  })
}
// import Shopdetail from '@/page/businessmange/shopdetail'
const Shopdetail = (resolve) =>{
  import ('@/page/businessmange/shopdetail').then((module)=>{
    resolve(module)
  })
}
// import Failcheck from '@/page/businessmange/failcheck'
const Failcheck = (resolve) =>{
  import ('@/page/businessmange/failcheck').then((module)=>{
    resolve(module)
  })
}
// import Deal from '@/page/capitalmanage/deal'
const Deal = (resolve) =>{
  import ('@/page/capitalmanage/deal').then((module)=>{
    resolve(module)
  })
}
// import Checkaccount from '@/page/capitalmanage/checkaccount'
const Checkaccount = (resolve) =>{
  import ('@/page/capitalmanage/checkaccount').then((module)=>{
    resolve(module)
  })
}
// import Depositcheck from '@/page/capitalmanage/depositcheck'
const Depositcheck = (resolve) =>{
  import ('@/page/capitalmanage/depositcheck').then((module)=>{
    resolve(module)
  })
}
// import Deposit from '@/page/capitalmanage/deposit'
const Deposit = (resolve) =>{
  import ('@/page/capitalmanage/deposit').then((module)=>{
    resolve(module)
  })
}
// import Tradedetail from '@/page/capitalmanage/tradedetail'
const Tradedetail = (resolve) =>{
  import ('@/page/capitalmanage/tradedetail').then((module)=>{
    resolve(module)
  })
}
// import Login from '@/page/login/login'
const Login = (resolve) =>{
  import ('@/page/login/login').then((module)=>{
    resolve(module)
  })
}
// import Changepsw from '@/page/login/changepsw'
const Changepsw = (resolve) =>{
  import ('@/page/login/changepsw').then((module)=>{
    resolve(module)
  })
}
// import Accountnum from '@/page/accountnum/accountnum'
const Accountnum = (resolve) =>{
  import ('@/page/accountnum/accountnum').then((module)=>{
    resolve(module)
  })
}
// import Addaccount from '@/page/accountnum/addaccount'
const Addaccount = (resolve) =>{
  import ('@/page/accountnum/addaccount').then((module)=>{
    resolve(module)
  })
}
// import Setnum from '@/page/accountnum/setnum'
const Setnum = (resolve) =>{
  import ('@/page/accountnum/setnum').then((module)=>{
    resolve(module)
  })
}
// import Sales from '@/page/salesmanage/sales'
const Sales = (resolve) =>{
  import ('@/page/salesmanage/sales').then((module)=>{
    resolve(module)
  })
}
// import Addregular from '@/page/salesmanage/addregular'
const Addregular = (resolve) =>{
  import ('@/page/salesmanage/addregular').then((module)=>{
    resolve(module)
  })
}
// import Infodetail from '@/page/salesmanage/infodetail'
const Infodetail = (resolve) =>{
  import ('@/page/salesmanage/infodetail').then((module)=>{
    resolve(module)
  })
}
// import Home from '@/components/home'
const Home = (resolve) =>{
  import ('@/components/home').then((module)=>{
    resolve(module)
  })
}
// import Teplist from '@/page/template/teplist'
const Teplist = (resolve) =>{
  import ('@/page/template/teplist').then((module)=>{
    resolve(module)
  })
}
// import Tep_attr from '@/page/template/tep_attr'
const Tep_attr = (resolve) =>{
  import ('@/page/template/tep_attr').then((module)=>{
    resolve(module)
  })
}
// import Menus from '@/page/menu/menus'
const Menus = (resolve) =>{
  import ('@/page/menu/menus').then((module)=>{
    resolve(module)
  })
}
// import Verifylogin from '@/page/login/verifylogin'
// import Role from '@/page/rolemanage/role'
const Role = (resolve) =>{
  import ('@/page/rolemanage/role').then((module)=>{
    resolve(module)
  })
}
// import Roledetail from '@/page/rolemanage/roledetail'
const Roledetail = (resolve) =>{
  import ('@/page/rolemanage/roledetail').then((module)=>{
    resolve(module)
  })
}
// import Addrole from '@/page/rolemanage/addrole'
const Addrole = (resolve) =>{
  import ('@/page/rolemanage/addrole').then((module)=>{
    resolve(module)
  })
}
// import  Addetail from '@/page/salesmanage/addetail'
const Addetail = (resolve) =>{
  import ('@/page/salesmanage/addetail').then((module)=>{
    resolve(module)
  })
}
// import  Add from '@/page/salesmanage/add'
const Add = (resolve) =>{
  import ('@/page/salesmanage/add').then((module)=>{
    resolve(module)
  })
}
// import  Ad from '@/page/salesmanage/ad'
const Ad = (resolve) =>{
  import ('@/page/salesmanage/ad').then((module)=>{
    resolve(module)
  })
}
// import  Adedit from '@/page/salesmanage/adedit'
const Adedit = (resolve) =>{
  import ('@/page/salesmanage/adedit').then((module)=>{
    resolve(module)
  })
}
// import  Increasead from '@/page/salesmanage/increasead'
const Increasead = (resolve) =>{
  import ('@/page/salesmanage/increasead').then((module)=>{
    resolve(module)
  })
}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/err',
      name: 'err',
      component: Err
    },

    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children:[{
      	path: '/shoplist',
	      name: 'Shoplist',
	      component: Shoplist
      },
       {
      	path: '/changepsw',
	      name: 'Changepsw',
	      component: Changepsw
      },
        {
          path: '/teplist',
          name: 'Teplist',
          component: Teplist
        },
        {
          path: '/tep_attr',
          name: 'Tep_attr',
          component: Tep_attr
        },
        {
          path: '/role',
          name: 'role',
          component: Role
        },
        {
          path: '/roledetail',
          name: 'roledetail',
          component: Roledetail
        },
        {
          path: '/addrole',
          name: 'addrole',
          component: Addrole
        },
      {
      	path: '/shopcheck',
	      name: 'Shopcheck',
	      component: Shopcheck
      },
        {
          path: '/menus',
          name: 'Menus',
          component: Menus
        },
       {
      	path: '/shopin',
	      name: 'Shopin',
	      component: Shopin
      },
      {
      	path: '/userlist',
	      name: 'Userlist',
	      component: Userlist
      },
      {
      	path: '/userdetail',
	      name: 'Userdetail',
	      component: Userdetail
      },
       {
      	path: '/tasklist',
	      name: 'Tasklist',
	      component: Tasklist
      },
      {
      	path: '/orderlist',
	      name: 'Orderlist',
	      component: Orderlist
      },
      {
      	path: '/orderdetail',
	      name: 'Orderdetail',
	      component: Orderdetail
      },
       {
      	path: '/orderdispute',
	      name: 'Orderdispute',
	      component: Orderdispute
      },
      {
      	path: '/handledispute',
	      name: 'Handledispute',
	      component: Handledispute
      },
      {
      	path: '/taskdetail',
	      name: 'Taskdetail',
	      component: Taskdetail
      },
       {
      	path: '/deal',
	      name: 'Deal',
	      component: Deal
      },
      {
      	path: '/checkaccount',
	      name: 'Checkaccount',
	      component: Checkaccount
      },
       {
      	path: '/depositcheck',
	      name: 'Depositcheck',
	      component: Depositcheck
      },
      {
      	path: '/deposit',
	      name: 'Deposit',
	      component: Deposit
      },
      {
      	path: '/tradedetail',
	      name: 'Tradedetail',
	      component: Tradedetail
      },
      {
      	path: '/accountnum',
	      name: 'Accountnum',
	      component: Accountnum
      },
      {
      	path: '/addaccount',
	      name: 'Addaccount',
	      component: Addaccount
      },
      {
      	path: '/setnum',
	      name: 'Setnum',
	      component: Setnum
      },
        {
      	path: '/sales',
	      name: 'Sales',
	      component: Sales
      },
        {
          path: '/add',
          name: 'add',
          component: Add
        },
        {
          path: '/addetail',
          name: 'addetail',
          component: Addetail
        },
      {
          path: '/addregular',
          name: 'Addregular',
          component: Addregular
        },
        {
          path: '/ad',
          name: 'ad',
          component: Ad
        },
        {
          path: '/increasead',
          name: 'increasead',
          component: Increasead
        },
        {
          path: '/adedit',
          name: 'adedit',
          component: Adedit
        },
      {
      	path: '/infodetail',
	      name: 'INfodetail',
	      component: Infodetail
      },
      {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/account',
          name: 'account',
          component: Account,
        },
        {
          path: '/add_accout',
          name: 'add_accout',
          component: Add_accout,
        },
        {
          path: '/advices',
          name: 'advices',
          component: Advices,
        },
        {
          path: '/new_advices',
          name: 'new_advices',
          component: New_advices,
        },
        {
          path: '/home_set',
          name: 'home_set',
          component: Home_set,
        },
       {
          path: '/shopdetail',
          name: 'Shopdetail',
          component: Shopdetail,
        },
       {
          path: '/failcheck',
          name: 'Failcheck',
          component: Failcheck,
        }]
   }]
})
