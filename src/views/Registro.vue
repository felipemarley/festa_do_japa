<template>
  <div>
    <main class="form-section">
      <h2>Registro de Usuário</h2>
      <form class="contact-form" @submit.prevent="registrar">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required />

        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" v-model="sobrenome" required />

        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />

        <button type="submit" class="btn">Registrar</button>
      </form>
    </main>
  </div>
</template>

<script>
import { post } from '@/services/api';
export default {
  name: "Registro",
  data() {
    return {
      nome: '',
      sobrenome: '',
      email: '',
      senha: ''
    };
  },
  methods: {
    async registrar() {
      if (!this.nome || !this.sobrenome || !this.email || !this.senha) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      try {
        const response = await post('/auth/register', {
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
          senha: this.senha
        });
        if (response.mensagem) {
          alert(response.mensagem);
          if (response.mensagem.includes('sucesso')) {
            this.nome = '';
            this.sobrenome = '';
            this.email = '';
            this.senha = '';
            this.$router.push('/login'); 
          }
        }
      } catch (error) {
        alert('Erro ao registrar usuário.');
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
.form-section {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}

.contact-form input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
