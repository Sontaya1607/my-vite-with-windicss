import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../views/homepage/Index.vue'

const history = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  }
]

const router = createRouter({
  history,
  routes
})

export default router