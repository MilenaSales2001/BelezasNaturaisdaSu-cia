const formulario = document.getElementById('formulario-feedback');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');
const mensagemErro = document.getElementById('mensagem-erro');

formulario.addEventListener('submit', (e) => {
 e.preventDefault();

 const nome = nomeInput.value.trim();
 const email = emailInput.value.trim();
 const mensagem = mensagemInput.value.trim();

 if (nome === '') {
 mensagemErro.innerText = 'Por favor, insira seu nome.';
 return;
 }

 if (email === '') {
 mensagemErro.innerText = 'Por favor, insira seu e-mail.';
 return;
 }

 if (!validarEmail(email)) {
 mensagemErro.innerText = 'E-mail inválido.';
 return;
 }

 if (mensagem === '') {
 mensagemErro.innerText = 'Por favor, insira sua mensagem.';
 return;
 }

 // Enviar formulário
 const dados = {
 nome,
 email,
 mensagem
 };

 // enviar os dados para seu servidor
 console.log(dados);

 // Limpar formulário
 formulario.reset();
 mensagemErro.innerText = '';
});

function validarEmail(email) {
 const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 return regex.test(email);
}

