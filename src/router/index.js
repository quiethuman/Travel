import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home') // 本在开头import，此处注册组件名Home，为了使用异步组件
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }],
  // 始终在跳转页展示时在顶部
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
