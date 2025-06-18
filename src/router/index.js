import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('../views/Login.vue')
  },

  {
    path: '/recuperar-senha',
    name: 'RecuperarSenha',
    component: () => import('../views/RecuperarSenha.vue')
  },

  {
    path: '/',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },
  
  {
    path: "/contato",
    name: "Contato",
    component: () => import("../views/Contato.vue")
  },
  
  {
    path: "/registrar",
    name: "Registro",
    component: () => import("../views/Registro.vue")
  }, 

  {
    path: '/cardapio',
    name: 'Cardapio',
    component: () => import("../views/Cardapio.vue")
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router

