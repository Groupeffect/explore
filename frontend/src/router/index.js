// Composables
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
      {
        path: '/',
        name: 'Home',
        visible: "always",
        component: () => import('@/views/Home.vue'),
        
      }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
