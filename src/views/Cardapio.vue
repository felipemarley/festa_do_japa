<template>
  <main class="cardapio-container">
    <h1>Nosso Cardápio</h1>

    <div class="filtros">
      <button
        v-for="categoria in categorias"
        :key="categoria"
        @click="categoriaSelecionada = categoria"
        :class="['btn-filtro', { ativo: categoriaSelecionada === categoria }]"
      >
        {{ categoria.toUpperCase() }}
      </button>
    </div>

    <section class="pratos-grid">
      <div
        v-for="prato in pratosFiltrados"
        :key="prato.id"
        class="prato-card"
      >
        <img :src="prato.image" :alt="prato.title" class="prato-img" />
        <h3>{{ prato.title.toUpperCase() }}</h3>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const apiKey = 'de5d75bd40bb42adac36d61b89a2e521' //Spoonacular API Key

const pratos = ref([])
const categoriaSelecionada = ref('Todos')

const categorias = [
  'Todos',
  'main course',
  'side dish',
  'soup',
  'salad',
  'appetizer',
  'fingerfood',
  'snack'
]

async function buscarPratos() {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=japanese&number=30&addRecipeInformation=true&apiKey=${apiKey}`
    )
    const data = await response.json()
    pratos.value = data.results
  } catch (error) {
    console.error('Erro ao buscar pratos:', error)
  }
}

const pratosFiltrados = computed(() => {
  if (categoriaSelecionada.value === 'Todos') return pratos.value

  return pratos.value.filter((prato) => {
    if (!prato.dishTypes) return false
    return prato.dishTypes.includes(categoriaSelecionada.value)
  })
})

onMounted(() => {
  buscarPratos()
})
</script>

<style scoped>
.cardapio-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #8b0000;
  font-weight: 700;
  font-size: 2.5rem;
}

.filtros {
  text-align: center;
  margin-bottom: 2rem;
}

.btn-filtro {
  background-color: #222; 
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.btn-filtro:hover {
  background-color: #444;
}

.btn-filtro.ativo {
  background-color: #ffd700; 
  color: #000;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.7);
}

.pratos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.prato-card {
  background-color: #000;
  color: #fff;
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
}

.prato-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(255, 215, 0, 0.8);
}

.prato-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  filter: brightness(0.85);
  transition: filter 0.3s ease;
}

.prato-card:hover .prato-img {
  filter: brightness(1);
}

.prato-card h3 {
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  color: #ffd700; 
}
</style>
