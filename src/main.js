import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

// Definindo o composable de autenticação (pode colocar em outro arquivo também)
import { reactive, provide } from 'vue'

function useAuth() {
  const state = reactive({
    usuario: JSON.parse(localStorage.getItem('usuario')) || null,
    token: localStorage.getItem('token') || null
  })

  function login(usuario, token) {
    state.usuario = usuario
    state.token = token
    localStorage.setItem('usuario', JSON.stringify(usuario))
    localStorage.setItem('token', token)
  }

  function logout() {
    state.usuario = null
    state.token = null
    localStorage.removeItem('usuario')
    localStorage.removeItem('token')
  }

  return {
    state,
    login,
    logout
  }
}

const app = createApp(App)

const auth = useAuth()
app.provide('auth', auth)

app.use(router).mount('#app')
