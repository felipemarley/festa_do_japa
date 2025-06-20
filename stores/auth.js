
import { ref, computed } from 'vue'

const usuario = ref(JSON.parse(localStorage.getItem('usuario')) || null)

export function useAuth() {
  const estaLogado = computed(() => !!usuario.value)

  function login(dados) {
    usuario.value = dados
    localStorage.setItem('usuario', JSON.stringify(dados))
  }

  function logout() {
    usuario.value = null
    localStorage.removeItem('usuario')
    localStorage.removeItem('token')
  }

  return { usuario, estaLogado, login, logout }
}
