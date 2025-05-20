<template>
  <div>
    <main class="form-section">
      <h2>Login</h2>
      <form @submit.prevent="validarLogin" class="contact-form" autocomplete="off">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required autocomplete="off" />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required autocomplete="new-password" />

        <button type="submit" class="btn">Entrar</button>
      </form>

      <p class="link-recuperar" style="margin-top: 1rem;">
        <RouterLink to="/recuperar-senha">Esqueceu sua senha?</RouterLink>
      </p>

      <p class="link-registro">
        <RouterLink to="/registrar">Não tem uma conta? Cadastre-se</RouterLink>
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const email = ref('')
const senha = ref('')

onMounted(() => {
  email.value = ''
  senha.value = ''
})

function validarLogin() {
  if (!email.value || !senha.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!emailRegex.test(email.value)) {
    alert('Por favor, insira um email válido.')
    return
  }

  alert('Login bem-sucedido!')
}
</script>
