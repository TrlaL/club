import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
import App from './App'
import Icon from './components/common/Icon'
import db from './datastore'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.prototype.$db = db
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.use(BootstrapVue)
Vue.use(VueBus)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router: router,
  store: store,
  template: '<App/>'
}).$mount('#app')
