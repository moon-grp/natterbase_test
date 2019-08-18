import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'home',
      component: dashboard
    },
    {
      path: '/settings',
      name: 'accountsettings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/accountsettings.vue')
    }
  ]
})
