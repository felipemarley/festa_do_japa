<template>
  <div class="reservas-container">
    <h1>Reservas de Mesas</h1>
    <div class="mesas-grid">
      <div
        v-for="mesa in mesas"
        :key="mesa.id"
        :class="['mesa', { reservada: mesa.reservada }]"
        @click="selecionarMesa(mesa)"
      >
        <TableIcon class="icon" />
        <p>Mesa {{ mesa.id }}</p>
        <p v-if="mesa.reservada" class="info">
          Reservada por {{ mesa.nome }} {{ mesa.sobrenome }}
        </p>
        <p v-else class="livre">Disponível</p>
      </div>
    </div>

    <Modal v-if="mostrarModal" @fechar="fecharModal">
      <template #header>
        <h3 v-if="mesaSelecionada?.reservada">Mesa {{ mesaSelecionada.id }} Reservada</h3>
        <h3 v-else>Reservar Mesa {{ mesaSelecionada.id }}</h3>
      </template>

      <template #body>
        <div v-if="mesaSelecionada?.reservada">
          <p>Reservada por: {{ mesaSelecionada.nome }} {{ mesaSelecionada.sobrenome }}</p>
        </div>
        <div v-else>
          <input v-model="form.nome" placeholder="Nome" />
          <input v-model="form.sobrenome" placeholder="Sobrenome" />
        </div>
      </template>

      <template #footer>
        <button v-if="mesaSelecionada?.reservada" class="cancelar" @click="cancelarReserva">Cancelar Reserva</button>
        <button v-else class="confirmar" @click="confirmarReserva">Confirmar</button>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { UtensilsCrossed } from 'lucide-vue-next'
import Modal from '@/components/Modal.vue'
import api from '@/services/api'

const mesas = ref([])
const mostrarModal = ref(false)
const mesaSelecionada = ref(null)
const form = ref({ nome: '', sobrenome: '' })
const TableIcon = UtensilsCrossed

const carregarMesas = async () => {
  const res = await api.get('/reservations')
  mesas.value = res.data
}

const selecionarMesa = (mesa) => {
  mesaSelecionada.value = mesa
  form.value = { nome: '', sobrenome: '' }
  mostrarModal.value = true
}

const fecharModal = () => {
  mostrarModal.value = false
  mesaSelecionada.value = null
}

const confirmarReserva = async () => {
  await api.post('/reservations', {
    id: mesaSelecionada.value.id,
    nome: form.value.nome,
    sobrenome: form.value.sobrenome
  })
  await carregarMesas()
  fecharModal()
}

const cancelarReserva = async () => {
  await api.delete(`/reservations/${mesaSelecionada.value.id}`)
  await carregarMesas()
  fecharModal()
}

onMounted(carregarMesas)
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
  cursor: pointer;
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

input {
  padding: 0.7rem;
  border-radius: 8px;
  border: none;
  width: 100%;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

button.confirmar {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button.confirmar:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

button.cancelar {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button.cancelar:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
