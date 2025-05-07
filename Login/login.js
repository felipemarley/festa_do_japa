// Função para validar o formulário de login
function validarLogin() {
    // Obter os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação simples de email e senha
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return false; // Impede o envio do formulário
    }

    // Validação simples de formato de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return false; // Impede o envio do formulário
    }

    // Aqui você pode adicionar mais validações de senha, se necessário

    // Se tudo estiver correto, o formulário é enviado
    alert('Login bem-sucedido!');
    return true; // Permite o envio do formulário
}
