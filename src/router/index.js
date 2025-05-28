import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Log_in.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Regi_ster.vue'),
    },
    {
      path: '/about',
      name: 'name',
      component: () => import('../components/about_us.vue'),
    },
  ],
})

export default router
