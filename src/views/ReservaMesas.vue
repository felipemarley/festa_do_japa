<template>
  <div class="reservas-container">
    <h1>Reservas de Mesas</h1>
    <div class="mesas-grid">
      <div
        v-for="mesa in mesas"
        :key="mesa.id"
        :class="['mesa', { reservada: mesa.reservada }]"
      >
        <TableIcon class="icon" />
        <p>Mesa {{ mesa.id }}</p>
        <p v-if="mesa.reservada" class="info">
          Reservada por {{ mesa.nome }} {{ mesa.sobrenome }}
        </p>
        <p v-else class="livre">Disponível</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Table } from 'lucide-vue-next'
import api from '@/services/api' 

const mesas = ref([])
const TableIcon = Table

onMounted(async () => {
  try {
    const response = await api.get('/reservations') // rota do backend: /reservations
    mesas.value = response.data
  } catch (error) {
    console.error('Erro ao buscar reservas:', error)
  }
})
</script>

<style scoped>
.reservas-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}

.mesas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.mesa {
  border: 2px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fdfdfd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}

.mesa.reservada {
  background-color: #ffe5e5;
  border-color: #cc0000;
}

.icon {
  width: 32px;
  height: 32px;
  color: #8b0000;
  margin-bottom: 0.5rem;
}

.info {
  font-size: 0.9rem;
  color: #b30000;
}

.livre {
  color: #007700;
  font-size: 0.9rem;
}
</style>
