const imagens = document.querySelectorAll('.imagens img');
const visor = document.getElementById('visor');
const imagemGrande = document.getElementById('imagem-grande');
const fechar = document.getElementById('fechar');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');
let imagemAtual = 0;

imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    imagemAtual = index;
    abrirImagem(img.src);
  });
});

function abrirImagem(src) {
  visor.classList.add('ativo');
  imagemGrande.innerHTML = `<img src="${src}" alt="Imagem grande">`;
}

fechar.addEventListener('click', () => {
  visor.classList.remove('ativo');
});

anterior.addEventListener('click', () => {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  abrirImagem(imagens[imagemAtual].src);
});

proximo.addEventListener('click', () => {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  abrirImagem(imagens[imagemAtual].src);
});