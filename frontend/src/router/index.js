// Composables
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
      {
        path: '/',
        name: 'Home',
        visible: "always",
        component: () => import('@/views/Home.vue'),
        
      },
      {
        path: '/graphics',
        name: 'GraphicView',
        visible: "always",
        component: () => import('@/views/GraphicView.vue'),
        children: [
          {
            path: "cellularautomata",
            name: "CellularView",
            component: () => import("@/components/pixijs/automata/CellularView.vue")
          },
          {
            path: 'floatinglogos',
            name: 'FloatingLogos',
            visible: "always",
            component: () => import('@/components/pixijs/FloatingLogos.vue'),
          }
        ]
      }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
