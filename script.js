
// Esta função roda assim que o script é carregado
function aplicarTemaImediato() {
    const temaSalvo = localStorage.getItem('modoEscuro');
    if (temaSalvo === 'ativo') {
        document.body.classList.add('dark-mode');
    }
}

// Chamar a função imediatamente
aplicarTemaImediato();

// garantindo que ela rode após o DOM carregar
window.addEventListener('DOMContentLoaded', aplicarTemaImediato);

function alternarTema() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('modoEscuro', 'ativo');
    } else {
        localStorage.setItem('modoEscuro', 'inativo');
    }
}

// window.onload para garantir que o script ache o formulário
window.onload = function() {
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome && email.includes('@') && mensagem) {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                alert("Erro: Preencha os campos corretamente.");
            }
        });
    }
};