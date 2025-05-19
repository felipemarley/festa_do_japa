<template>
  <div>
    <header>
      <nav class="navbar">
        <h1 class="logo">Festa do Japa</h1>
        <ul class="nav-links">
          <li><RouterLink to="/home">Início</RouterLink></li>
          <li><a href="#">Cardápio</a></li>
          <li><a href="#">Reservas</a></li>
          <li><RouterLink to="/contato">Contato</RouterLink></li>
          <li><RouterLink to="/login">Login</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="form-section">
      <h2>Login</h2>
      <form @submit.prevent="validarLogin" class="contact-form">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />

        <button type="submit" class="btn">Entrar</button>
      </form>

      <p class="link-recuperar" style="margin-top: 1rem;">
        <RouterLink to="/recuperar-senha">Esqueceu sua senha?</RouterLink>
      </p>

      <p class="link-registro">
        <RouterLink to="/registrar">Não tem uma conta? Cadastre-se</RouterLink>
      </p>
    </main>

    <footer>
      <p>&copy; 2025 Festa do Japa. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')

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

<style scoped>
/* Adaptado de style-login.css */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.form-section {
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-top: 1rem;
}

.contact-form input {
  padding: 0.5rem;
  margin-top: 0.25rem;
}

.btn {
  margin-top: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

footer {
  text-align: center;
  margin-top: 2rem;
}
</style>
