import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue')
  },
  {
    path: '/results',
    name: 'PatientResults',
    component: () => import(/* webpackChunkName: "results" */ '../views/PatientResults.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
