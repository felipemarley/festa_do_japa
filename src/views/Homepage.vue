<template>
  <main class="home-container">
    <!-- Seção Hero -->
<section class="hero">
    <h1>Bem-vindo à Festa do Japa!</h1>
    <p>
      Explore o melhor da culinária japonesa com praticidade e sabor. Aqui você pode:
    </p>
    <ul class="recursos-site">
      <li>
        <BookOpen class="icon" />
        Navegue pelo nosso cardápio completo
      </li>
      <li>
        <CalendarCheck class="icon" />
        Reserve sua mesa online com facilidade
      </li>
      <li>
        <Handshake class="icon" />
        Conheça nosso programa de franquias
      </li>
      <li>
        <MessageSquareHeart class="icon" />
        Conheça nossa história
      </li>
    </ul>
    <RouterLink to="/cardapio" class="btn">Comece pelo Cardápio</RouterLink>
  </section>

    <section class="nossa-historia">
    <div class="container-texto">
      <h2>Nossa História</h2>
      <p>
        A Festa do Japa nasceu da paixão pela culinária japonesa autêntica e do desejo de proporcionar uma experiência única aos nossos clientes. Desde o início, prezamos pela qualidade dos ingredientes e pelo atendimento acolhedor, criando um ambiente que une tradição e inovação.
      </p>

      <div class="diferenciais">
        <div class="diferencial">
          <Coffee size="40" color="#8b0000" />
          <h3>Ingredientes Frescos</h3>
          <p>Selecionamos os melhores ingredientes para garantir sabor e qualidade.</p>
        </div>
        <div class="diferencial">
          <Award size="40" color="#8b0000" />
          <h3>Mais de 10 Anos de Experiência</h3>
          <p>Temos uma trajetória marcada por excelência e satisfação dos clientes.</p>
        </div>
        <div class="diferencial">
          <Star size="40" color="#8b0000" />
          <h3>Atendimento Personalizado</h3>
          <p>Nosso time se dedica a tornar sua visita inesquecível.</p>
        </div>
      </div>
    </div>

    <div class="container-imagem">
  <img
    v-if="pratoImagemUrl"
    :src="pratoImagemUrl"
    alt="Prato japonês ilustrativo"
    class="imagem-prato"
  />
  <div v-else class="imagem-skeleton" />
</div>
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
  <h2>Seja um Franqueado!!</h2>
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
import { Calendar, Coffee, Moon, CheckCircle, Award, TrendingUp, Star, BookOpen, CalendarCheck, Handshake, MessageSquareHeart } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
const pratoImagemUrl = ref('')

async function fetchPrato() {
  try {
    const response = await fetch('https://api.spoonacular.com/recipes/random?number=1&tags=japanese&apiKey=de5d75bd40bb42adac36d61b89a2e521')
    const data = await response.json()
    if (data.recipes && data.recipes.length > 0) {
      pratoImagemUrl.value = data.recipes[0].image
    }
  } catch (error) {
    console.error('Erro ao buscar imagem do prato:', error)
  }
}

onMounted(() => {
  fetchPrato()
})
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

.nossa-historia {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
}

.container-texto {
  flex: 1 1 500px;
  min-width: 300px;
}

.container-texto h2 {
  color: #8b0000;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.container-texto p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;
}

.diferenciais {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.diferencial {
  flex: 1 1 150px;
  text-align: center;
}

.diferencial h3 {
  color: #8b0000;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.diferencial p {
  font-size: 0.95rem;
  color: #555;
}

.por-que-escolher {
  background-color: #f0f0f0;
  padding: 1rem 1.5rem;
  border-radius: 12px;
}

.por-que-escolher h3 {
  color: #8b0000;
  margin-bottom: 0.75rem;
}

.container-imagem {
  flex: 1 1 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
}

.imagem-prato {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
  object-fit: cover;
}

.imagem-placeholder {
  font-style: italic;
  color: #999;
  font-size: 1rem;
}

.imagem-skeleton {
  width: 100%;
  max-width: 400px;
  height: 250px;
  background: linear-gradient(90deg, #eeeeee 25%, #dddddd 50%, #eeeeee 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 12px;
  margin: 0 auto;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.hero {
  background-color: #fdf6f0;
  padding: 3rem;
  text-align: center;
  border-radius: 12px;
  max-width: 1000px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.hero h1 {
  font-size: 2.5rem;
  color: #8b0000;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 1.5rem;
}

.recursos-site {
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem;
  text-align: left;
  max-width: 600px;
}

.recursos-site li {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 0.75rem 0;
  gap: 0.75rem;
  color: #333;
}

.recursos-site a {
  color: #8b0000;
  text-decoration: underline;
}

.icon {
  width: 20px;
  height: 20px;
  color: #8b0000;
  flex-shrink: 0;
}

.btn {
  background-color: #ffd700;
  color: #000;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e6c200;
}
</style>