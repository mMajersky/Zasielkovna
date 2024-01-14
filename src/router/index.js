import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeliveriesVue from '../views/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/deliveries',
      name: 'services',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServiceView.vue')
    },
    {     
      path: '/deliveries/:slug',
      name: 'reserving',
      component: () => import('../views/ReservingView.vue'),
      props: true,
    }, 
    {
      path: '/deliveries/reserving/:location',
      name: 'reserving',
      component: () => import('../views/ReservingView.vue'),
      props: true,
    },
    {
      path: '/contact_us',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/tracker',
      name: 'tracker',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrackerView.vue')
    },

  ]
})

export default router
