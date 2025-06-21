import { createRouter, createWebHistory } from 'vue-router'

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
  },

  {
    path: '/reservas',
    name: 'Reservas',
    component: () => import("../views/ReservaMesas.vue"),
    meta: { requiresAuth: true }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const usuarioLogado = localStorage.getItem('token')

  if (to.meta.requiresAuth && !usuarioLogado) {
    next('/login')
  } else {
    next()
  }
})

export default router