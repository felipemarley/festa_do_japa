<template>
  <main class="home-container">
    <!-- Seção Hero -->
    <section class="hero">
      <h1>Bem-vindo à Festa do Japa!</h1>
      <p>Explore nosso restaurante e descubra os sabores do Japão.</p>
      <RouterLink to="/cardapio" class="btn">Ver Cardápio</RouterLink>
    </section>

    <!-- Seção Sobre -->
    <section class="sobre">
      <h2>Nossa História</h2>
      <p>
        Fundado com o propósito de unir tradição e modernidade, o Festa do Japa nasceu da paixão pela culinária japonesa autêutentica. Com pratos que honram receitas milenares e toques contemporâneos, somos mais que um restaurante — somos uma celebração da cultura japonesa.
      </p>
    </section>

    <!-- Seção Cardápio -->
    <section class="sessao-link" id="sessao-cardapio">
      <h2>Conheça nosso Cardápio</h2>
      <p>Pratos preparados com ingredientes selecionados e técnicas japonesas.</p>
      <RouterLink to="/cardapio" class="btn">Explorar</RouterLink>
    </section>

    <!-- Seção Reservas -->
    <section class="sessao-link" id="sessao-reservas">
      <h2>Reserve sua Mesa</h2>
      <p>Garanta seu lugar para uma experiência inesquecível.</p>
      <RouterLink to="/reservas" class="btn">Fazer Reserva</RouterLink>
    </section>

    <section class="operating-hours">
      <h2>Horários de Funcionamento</h2>
      <div class="hours-grid">
        <div class="hour-item">
          <Coffee size="48" class="icon-hour" />
          <div>
            <h3>Almoço</h3>
            <p>11h30 às 15h00</p>
          </div>
        </div>
        <div class="hour-item">
          <Moon size="48" class="icon-hour" />
          <div>
            <h3>Jantar</h3>
            <p>18h00 às 23h00</p>
          </div>
        </div>
        <div class="hour-item">
          <Calendar size="48" class="icon-hour" />
          <div>
            <h3>Final de Semana e Feriados</h3>
            <p>11h30 às 16h00</p>
          </div>
        </div>
      </div>
    </section>

 <section class="sessao-franquia" id="sessao-franquia">
  <h2>Seja um Franqueado Festa do Japa</h2>
  <p>
    Junte-se à rede Festa do Japa e seja dono do seu próprio negócio. Com a força e o suporte do Grupo Trigo, uma das maiores redes de alimentação do Brasil, você terá toda a assistência necessária para o sucesso do seu empreendimento.
  </p>

  <div class="beneficios">
    <div class="beneficio-item">
      <CheckCircle class="icon-beneficio" />
      <h3>Suporte Completo</h3>
      <p>Treinamento e acompanhamento contínuo pelo Grupo Trigo</p>
    </div>

    <div class="beneficio-item">
      <Award class="icon-beneficio" />
      <h3>Grupo Trigo</h3>
      <p>Mais de 30 anos de tradição no mercado de alimentação</p>
    </div>

    <div class="beneficio-item">
      <TrendingUp class="icon-beneficio" />
      <h3>Modelo de Sucesso</h3>
      <p>Operação testada e aprovada em diversas regiões do Brasil</p>
    </div>
  </div>

  <a href="https://www.grupotrigo.com.br/" target="_blank" rel="noopener" class="btn btn-franquia">
    Saiba mais no Grupo Trigo
  </a>
</section>


    <!-- Seção Contato -->
    <section class="sessao-link" id="sessao-contato">
      <h2>Fale Conosco</h2>
      <p>Entre em contato para dúvidas, sugestões ou parcerias.</p>
      <RouterLink to="/contato" class="btn">Contato</RouterLink>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Calendar, Coffee, Moon, CheckCircle, Award, TrendingUp } from 'lucide-vue-next'
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  display: inline-block;
  margin-top: 1rem;
}

.btn:hover {
  background-color: #e6c200;
}

section {
  padding: 2rem;
  border-radius: 12px;
  background-color: #fff8dc;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  text-align: center;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 0.8rem;
  color: #8b0000;
}

section p {
  font-size: 1rem;
  color: #333;
}

.operating-hours {
  margin: 4rem auto 2rem;
  padding: 2rem 1rem;
  background-color: #fdfdfd;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.operating-hours h2 {
  font-size: 2rem;
  color: #8b0000;
  margin-bottom: 2rem;
}

.hours-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.hour-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  max-width: 600px;
  text-align: left;
}

.icon-calendar {
  color: #c8102e;
  flex-shrink: 0;
}

.hour-item h3 {
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.3rem;
}

.hour-item p {
  font-size: 1rem;
  color: #333;
}

@media (min-width: 768px) {
  .hours-grid {
    flex-direction: row;
    justify-content: center;
  }

  .hour-item {
    flex-direction: row;
  }
}

.sessao-link {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2.5rem 1.5rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(200, 200, 200, 0.3);
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.sessao-link h2 {
  font-size: 2rem;
  color: #8b0000;
  margin-bottom: 1rem;
  font-weight: 700;
}

.sessao-link p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.sessao-link .btn {
  background-color: #ffd700;
  color: #000;
  padding: 0.75rem 1.75rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.sessao-link .btn:hover {
  background-color: #e6c200;
}

.sessao-franquia {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 12px rgba(200, 200, 200, 0.3);
}

.sessao-franquia h2 {
  font-size: 2.5rem;
  color: #8b0000;
  font-weight: 700;
  margin-bottom: 1rem;
}

.sessao-franquia p {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.beneficios {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.beneficio-item {
  max-width: 250px;
  text-align: center;
}

.icon-beneficio {
  color: #c8102e;
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.beneficio-item h3 {
  font-size: 1.25rem;
  color: #8b0000;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.beneficio-item p {
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
}

.btn-franquia {
  background-color: #ffd700;
  color: #000;
  padding: 0.9rem 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.btn-franquia:hover {
  background-color: #e6c200;
}
</style>
