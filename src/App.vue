<template>
  <div id="app">
    <nav>
      <router-link to="/">Início</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  background: #f0f0f0;
}
nav a {
  margin-right: 10px;
  color: #42b983;
  text-decoration: none;
}
</style>
