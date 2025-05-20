<template>
  <header>
    <nav class="navbar">
      <img src="/festa_do_japa.jpg" alt="Logo Festa do Japa" class="logo-img" />
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
</template>

<style scoped>
.logo-img {
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>
