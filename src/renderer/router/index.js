import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/datalogger',
      name: 'datalogger',
      component: require('@/components/Datalogger').default
    },
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/Dashboard').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
