import Vue from 'vue'
import router  from '../router'
import axios from 'axios'
import utils from './utils.js'
const service = axios.create({
  baseURL: "http://api",
  timeout: 25000
})
// request拦截器
service.interceptors.request.use(config => {
  utils.showFullScreenLoading()
  config.headers['token'] = utils.localData.get('token')
  return config
}, error => {
  console.log('requestError: ', error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    utils.tryHideFullScreenLoading()
    console.log(response)
    if (response.data.status === 4023) {
      router.push({
        path:'/'
      })
      utils.localData.remove('token')
    }
    return response
  },
  error => {
    utils.tryHideFullScreenLoading()
    router.push({
      path:'/err'
    })

    // var timer = setInterval(function(){
    //   router.push({
    //     path:'/'
    //   })
    // },5000)

    // console.log('requestError: ', error)
    //   if (error.data.status === 4023) {
    //     router.push({
    //         path:'/'
    //       })
    //    utils.loadData.remove('token')
    //   }
    return Promise.reject(error)
  }
)

export default service
