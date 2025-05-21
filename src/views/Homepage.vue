<template>
  <main class="home-container">
    <section class="hero">
      <h1>Bem-vindo à Festa do Japa!</h1>
      <p>Explore nosso restaurante e descubra os sabores do Japão.</p>
      <RouterLink to="/cardapio" class="btn">Ver Cardápio</RouterLink>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

.hero {
  background-color: #f0f0f0;
  padding: 3rem;
  text-align: center;
  border-radius: 12px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #8b0000;
}

.hero p {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #333;
}

.btn {
  background-color: #ffd700;
  color: #000;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e6c200;
}
</style>
