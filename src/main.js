// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'

import qs from 'qs'
import * as qiniu from 'qiniu-js'

import VeLine from 'v-charts/lib/line.common'

import './assets/css/resset.css'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css';
import interfaces from '@/data_interface.js'
import utils from './util/utils.js'



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.component(VeLine.name, VeLine)
Vue.use(interfaces)
Vue.prototype.ajax=function(url,data,fun){
  axios({
        method: 'post',
        url: url,
        data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'token': localStorage.getItem("token")
        }
      }).then(fun)
}
//全局
import global from '@/global.js'
Vue.use(global)

Vue.prototype.$utils = utils
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
