<template>
  <div>
    <main class="form-section">
      <h2>Fale Conosco</h2>
      <p>Preencha o formulário abaixo e responderemos em breve.</p>

      <form class="contact-form" @submit.prevent="enviarFormulario">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required />

        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" v-model="mensagem" rows="5" required></textarea>

        <button type="submit" class="btn">Enviar</button>
      </form>
    </main>

  </div>
</template>

<script>
export default {
  name: "Contato",
  data() {
    return {
      nome: '',
      email: '',
      mensagem: ''
    }
  },
  methods: {
    enviarFormulario() {
      if (!this.nome || !this.email || !this.mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      //todo
      alert("Mensagem enviada com sucesso!");

      //limpando campos
      this.nome = '';
      this.email = '';
      this.mensagem = '';
    }
  }
}
</script>

