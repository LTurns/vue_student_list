import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../components/EditComponent')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
