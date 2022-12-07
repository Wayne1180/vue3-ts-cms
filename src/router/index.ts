import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login/LoginPage.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/Main/MainPage.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
