import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/game",
    name: "GameView",
    component: () => import("@/views/GameView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
