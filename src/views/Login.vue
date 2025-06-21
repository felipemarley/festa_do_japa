<template>
  <div class="form-wrapper">
    <main class="form-section">
      <h2>Login</h2>
      <form @submit.prevent="validarLogin" class="contact-form" autocomplete="off">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />

        <button type="submit" class="btn">Entrar</button>

        <p v-if="erro" class="erro">{{ erro }}</p>
      </form>

      <p class="link-recuperar">
        <RouterLink to="/recuperar-senha">Esqueceu sua senha?</RouterLink>
      </p>

      <p class="link-registro">
        <RouterLink to="/registrar">Não tem uma conta? Cadastre-se</RouterLink>
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/services/api'

const email = ref('')
const senha = ref('')
const erro = ref(null)

const router = useRouter()

async function validarLogin() {
  erro.value = null

  if (!email.value || !senha.value) {
    erro.value = 'Preencha todos os campos.'
    return
  }

  try {
    const data = await post('/auth/login', {
      email: email.value,
      senha: senha.value
    })

    const { token, usuario, mensagem } = data

    if (token && usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario))
      localStorage.setItem('token', token)
      alert(mensagem || 'Login feito com sucesso!')
      window.location.href = '/'
    } else {
      erro.value = mensagem || 'Falha no login.'
    }
  } catch (err) {
    erro.value = err.response?.data?.mensagem || 'Email ou senha incorretos.'
    console.error(err)
  }
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.form-section {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.contact-form label {
  display: block;
  text-align: left;
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.contact-form input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.btn {
  width: 100%;
  padding: 0.9rem;
  background-color: #c8102e;
  color: #fff;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #a70d24;
}

.link-recuperar,
.link-registro {
  margin-top: 1rem;
}

.erro {
  color: #b00000;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>
