import Layout from '@/layout'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 防止重复路由点击报错 */
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/index'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/packageComponent',
    component: Layout,
    redirect: '/packageComponent/tablePage',
    meta: { title: '官方教程', icon: 'el-icon-collection' },
    //通过children配置子级路由
    children: [
      {
        path: 'dome',
        name: 'dome',
        component: () => import('@/views/componentManagement/dome'),
        meta: { title: 'dome', icon: 'el-icon-menu' },
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/componentManagement/project'),
        meta: { title: 'project', icon: 'el-icon-menu' },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: '页面不存在',
    },
    component: () => import('@/views/errorpage'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  // 切换路由后滚动条置顶
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    }
  },
})

export default router
