function enviarLinkRecuperacao(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const emailInput = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    if (!emailInput.value) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    // Exibe a mensagem de confirmação
    mensagem.style.display = 'block';

    // Limpa o campo de email (opcional)
    emailInput.value = '';

    return false; // Evita recarregar a página
}
