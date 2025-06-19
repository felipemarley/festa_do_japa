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
import { ref } from 'vue';
import { post } from '@/services/api';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const senha = ref('');

async function validarLogin() {
  if (!email.value || !senha.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  try {
    const response = await post('/auth/login', {
      email: email.value,
      senha: senha.value
    });

    if (response.mensagem) {
      alert(response.mensagem);
      if (response.mensagem.includes('sucesso')) {
        router.push('/'); 
      }
    }
  } catch (error) {
    alert('Erro ao fazer login.');
    console.error(error);
  }
}
</script>

