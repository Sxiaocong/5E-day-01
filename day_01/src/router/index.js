import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      title: "用户登录"
    }
  },
  {
    path: '/bookStore',
    name: 'bookStore',
    component: () => import('../views/bookStore.vue'),
    meta: {
      title: "图书商城"
    }
  },
  {
    path: '/mybookshelf',
    name: 'mybookshelf',
    component: () => import('../views/mybookshelf.vue'),
    meta: {
      title: "我的书架"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
