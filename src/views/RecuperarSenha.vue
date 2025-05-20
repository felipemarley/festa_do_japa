<template>
  <div>
    <main class="form-section">
      <h2>Recuperação de Senha</h2>
      <form @submit="validarRecuperacaoSenha" class="contact-form">
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" name="email" required />

        <button type="submit" class="btn">Recuperar Senha</button>
      </form>

      <p class="link-recuperar">
        <RouterLink to="/login">Voltar para o Login</RouterLink>
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function validarRecuperacaoSenha(event) {
  event.preventDefault()

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if (!emailRegex.test(email.value)) {
    alert('Por favor, insira um e-mail válido.')
    return false
  }

  alert('Instruções de recuperação foram enviadas para o seu e-mail.')

  // enviar para backend
  // Como não temos backend, apenas mostramos o alerta
  return true
}
</script>
