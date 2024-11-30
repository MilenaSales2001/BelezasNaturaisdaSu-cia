function mostrarMais(botao) {
    var informaçõesAdicionais = botao.nextElementSibling;
    if (informaçõesAdicionais.style.display === 'none') {
        informaçõesAdicionais.style.display = 'block';
        botao.textContent = 'Ocultar';
    } else {
        informaçõesAdicionais.style.display = 'none';
        botao.textContent = 'Mostrar Mais';
    }
}