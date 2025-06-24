<template>
  <header class="header">
    <div class="header-container">
      <RouterLink to="/" class="logo-area">
        <img src="/festa_do_japa.jpg" alt="Festa do Japa" class="logo" />
        <div class="restaurant-brand">
          <span class="restaurant-name">Festa do Japa</span>
        </div>
      </RouterLink>

      <button class="btn-mobile-nav" @click="isMenuOpen = true">
        <Menu size="28" class="icon-white" />
      </button>

      <nav class="nav" :class="{ 'is-open': isMenuOpen }">
        <button class="btn-close-nav" @click="isMenuOpen = false">
          <X size="28" class="icon-white" />
        </button>
        <RouterLink to="/" class="nav-link">
          <Home size="16" class="icon" /> Início
        </RouterLink>
        <RouterLink to="/cardapio" class="nav-link">
          <Utensils size="16" class="icon" /> Cardápio
        </RouterLink>
        <RouterLink to="/reservas" class="nav-link">
          <Calendar size="16" class="icon" /> Reservas
        </RouterLink>
        <RouterLink to="/contato" class="nav-link">
          <Phone size="16" class="icon" /> Contato
        </RouterLink>

        <div class="dropdown-container" @mouseenter="mostrarDropdown = true" @mouseleave="mostrarDropdown = false">
          <button class="btn-login">
            <User size="22" class="icon-white" />
            {{ usuario?.nome || 'Conta' }}
          </button>
          <div class="dropdown-menu" v-if="mostrarDropdown">
            <template v-if="usuario">
              <span class="dropdown-item">Bem-vindo, {{ usuario.nome.split(' ')[0] }}</span>
              <a href="#" class="dropdown-item" @click.prevent="deslogar">Sair</a>
            </template>
            <template v-else>
              <RouterLink :to="'/login'" class="dropdown-item">Login</RouterLink>
              <RouterLink :to="'/registrar'" class="dropdown-item">Cadastro</RouterLink>
            </template>
          </div>
        </div>

        <button class="btn-cart" @click="abrirCarrinho">
          <ShoppingCart size="22" class="icon-white" />
          <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Home, Utensils, Calendar, Phone, User, ShoppingCart, Menu, X } from 'lucide-vue-next'

const usuario = ref(null);
const mostrarDropdown = ref(false);
const isMenuOpen = ref(false);
const route = useRoute();

function carregarUsuario() {
  const usuarioJSON = localStorage.getItem('usuario');
  usuario.value = usuarioJSON ? JSON.parse(usuarioJSON) : null;
}

function deslogar() {
  localStorage.removeItem('usuario');
  localStorage.removeItem('token');
  usuario.value = null;
  isMenuOpen.value = false;
  window.location.href = '/';
}

onMounted(() => {
  carregarUsuario();
});

watch(() => route.path, () => {
  isMenuOpen.value = false;
});

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&family=Poppins:wght@400;600&display=swap');

.header {
  background-color: #c8102e;
  font-family: 'Poppins', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  flex-shrink: 0;
}

.restaurant-brand {
  display: flex;
  align-items: center;
}

.restaurant-name {
  font-family: 'Sawarabi Mincho', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  margin-left: 8px;
  white-space: nowrap;
}

.logo {
  height: 40px;
}

.nav {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}

.nav-link {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.35rem;
  border-radius: 6px;
}

.nav-link:hover {
  color: #ffcc00;
  background-color: rgba(255, 204, 0, 0.15);
}

.icon {
  margin-bottom: 0;
}

.icon-white {
  color: white;
  margin-bottom: 0;
}

.btn-login {
  background-color: #000;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border: none;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 0 25px 0 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #333;
}

.btn-cart {
  position: relative;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 25px 0 25px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
}

.btn-cart:hover {
  background-color: #333;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -10px;
  background: #ffcc00;
  color: #000;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 14px;
  pointer-events: none;
}

.dropdown-container {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 115%;
  right: 0;
  background-color: #000;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
  min-width: 150px;
}

.dropdown-item {
  padding: 0.7rem 1.2rem;
  display: block;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #222;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  right: 12px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #000;
}

.btn-mobile-nav,
.btn-close-nav {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
}

@media (max-width: 992px) {
  .btn-mobile-nav {
    display: block;
  }

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: #1a1a1a;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 4rem 2rem;
    transform: translateX(100%);
    transition: transform 0.35s ease-in-out;
    z-index: 1001;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.25);
  }

  .nav.is-open {
    transform: translateX(0);
  }

  .btn-close-nav {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    justify-content: center;
  }

  .dropdown-container {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .btn-login {
    background: none;
    box-shadow: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0;
    text-transform: none;
  }

  .dropdown-menu {
    position: static;
    background: none;
    box-shadow: none;
    border-radius: 0;
    min-width: auto;
    width: 100%;
    text-align: center;
    border-top: 1px solid #444;
    margin-top: 1rem;
    padding-top: 1rem;
  }

  .dropdown-menu::before {
    display: none;
  }

  .btn-cart {
    background: none;
    box-shadow: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0;
  }
}

@media (max-width: 480px) {
  .restaurant-name {
    display: none;
  }
}
</style>
