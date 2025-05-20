<template>
  <div>
    <header>
      <nav class="navbar">
        <h1 class="logo">Festa do Japa</h1>
        <ul class="nav-links">
          <li><RouterLink to="/">Início</RouterLink></li>
          <li><a href="#">Cardápio</a></li>
          <li><a href="#">Reservas</a></li>
          <li><RouterLink to="/contato">Contato</RouterLink></li>
          <li><RouterLink to="/login">Login</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="hero">
      <section class="hero-content">
        <h2>Bem-vindo ao Sabor & Arte</h2>
        <p>
          Descubra uma experiência gastronômica única com pratos artesanais e
          ambiente acolhedor.
        </p>
        <a href="#" class="btn">Ver Cardápio</a>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Festa do Japa. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
// Nenhuma lógica JS aqui ainda — tela estática
</script>
