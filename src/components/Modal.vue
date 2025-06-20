<template>
  <div class="modal-overlay" @click.self="$emit('fechar')">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header" />
      </header>

      <div class="modal-body">
        <slot name="body" />
      </div>

      <footer class="modal-footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup>
// Nada por enquanto
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-family: 'Poppins', sans-serif;
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: #c8102e;
  color: white;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.modal-header {
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 0.75rem;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.modal-body input {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  color: #333;
  transition: 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.modal-body input::placeholder {
  color: #888;
}

.modal-body input:focus {
  outline: none;
  box-shadow: 0 0 0 3px #ffcc00;
}

.modal-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.modal-footer button {
  padding: 0.7rem 1.4rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: all 0.25s ease-in-out;
  border: none;
}

.modal-footer .confirmar {
  background-color: #ffcc00;
  color: #000;
}

.modal-footer .confirmar:hover {
  background-color: #e6b800;
  transform: translateY(-2px);
}

.modal-footer .cancelar {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.modal-footer .cancelar:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
