// Função para validar o formulário de recuperação de senha
function validarRecuperacaoSenha(event) {
    event.preventDefault();  // Previne o envio do formulário para poder validar antes
  
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Verifica se o email está no formato correto
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }
  
    // Caso o email seja válido, o formulário é enviado
    alert("Instruções de recuperação foram enviadas para o seu e-mail.");
    
    // Aqui, normalmente você enviaria o formulário para o backend
    // Se estivesse implementado o backend, a linha abaixo seria removida
    document.getElementById("recuperarSenhaForm").submit();  // Submete o formulário se o email for válido
    return true;
  }
  