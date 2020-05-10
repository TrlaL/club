import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  if (to.meta.logins.includes(store.getters.login)) {
    next()
  } else {
    next({ name: 'sign-in' })
  }
})

export default router
