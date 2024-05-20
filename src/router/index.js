import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashBoard',
    name: 'dashBoard',
    component: () => import('../views/DashBoardView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  },
  {
    path: '/yourprofile',
    name: 'yourprofile',
    component: () => import('../views/userProfile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
