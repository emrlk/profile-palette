import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'badges'
    },
    {
      path: '/emotes',
      name: 'emotes',
      component: () => import('../views/EmotesView.vue')
    },
    {
      path: '/backgrounds',
      name: 'backgrounds',
      component: () => import('../views/BackgroundsView.vue')
    },
    {
      path: '/badges',
      name: 'badges',
      component: () => import('../views/BadgesView.vue')
    }
  ]
})

export default router
