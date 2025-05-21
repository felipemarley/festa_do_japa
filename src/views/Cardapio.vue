<template>
  <main class="cardapio-container">
    <section class="filtros">
      <h2>PRATOS DISPONÍVEIS</h2>
      <div class="botoes-filtro">
        <button
          v-for="tipo in tiposDePrato"
          :key="tipo"
          @click="filtrarPratos(tipo)"
          :class="{ ativo: tipoSelecionado === tipo }"
          class="filtro-btn"
        >
          {{ tipo.toUpperCase() }}
        </button>
      </div>
    </section>

    <section class="pratos">
      <h2>{{ tipoSelecionado ? tipoSelecionado.toUpperCase() : 'CARDÁPIO' }}</h2>

      <div class="pratos-grid">
        <div
          v-if="isLoading"
          v-for="n in 8"
          :key="'skeleton-' + n"
          class="prato-card skeleton"
        >
          <div class="prato-img-skeleton shimmer"></div>
          <div class="titulo-skeleton shimmer"></div>
        </div>

        <div
          v-else
          v-for="prato in pratosFiltrados"
          :key="prato.id"
          class="prato-card"
        >
          <img :src="prato.image" :alt="prato.title" class="prato-img" />
          <h3>{{ prato.title.toUpperCase() }}</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

const pratos = ref([])
const tipoSelecionado = ref('')
const isLoading = ref(true)

const tiposDePrato = [
  'main course',
  'side dish',
  'soup',
  'salad',
  'appetizer'
]

const apiKey = 'de5d75bd40bb42adac36d61b89a2e521' //Spoonacular API Key

async function buscarPratos() {
  isLoading.value = true
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=japanese&number=30&addRecipeInformation=true&apiKey=${apiKey}`
    )
    const data = await response.json()
    pratos.value = data.results
  } catch (error) {
    console.error('Erro ao buscar pratos:', error)
  } finally {
    isLoading.value = false
  }
}

function filtrarPratos(tipo) {
  tipoSelecionado.value = tipoSelecionado.value === tipo ? '' : tipo
}

const pratosFiltrados = computed(() => {
  if (!tipoSelecionado.value) return pratos.value
  return pratos.value.filter((prato) =>
    prato.dishTypes?.includes(tipoSelecionado.value)
  )
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
}

.filtros {
  text-align: center;
  margin-bottom: 2rem;
}

.filtros h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #111;
}

.botoes-filtro {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.filtro-btn {
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.filtro-btn:hover,
.filtro-btn.ativo {
  background-color: #000;
  color: #fff;
}

.pratos {
  text-align: center;
}

.pratos h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #111;
}

.pratos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.prato-card {
  background-color: #000;
  color: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1rem;
}

.prato-card:hover {
  transform: translateY(-8px);
}

.prato-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.prato-card h3 {
  font-size: 1rem;
  margin-top: 1rem;
}

/* Skeleton loaders com shimmer */
.skeleton {
  background-color: #1a1a1a;
}

.shimmer {
  position: relative;
  overflow: hidden;
  background: #2c2c2c;
}

.shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: -150px;
  height: 100%;
  width: 150px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    left: -150px;
  }
  100% {
    left: 100%;
  }
}

.prato-img-skeleton {
  height: 200px;
  border-radius: 12px 12px 0 0;
}

.titulo-skeleton {
  height: 20px;
  margin: 1rem auto 0;
  width: 60%;
  border-radius: 8px;
}
</style>
