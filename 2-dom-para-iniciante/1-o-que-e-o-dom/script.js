console.log(window);
console.log("ola");     
const h1Selecionado = document.querySelector('h1');
console.log (h1Selecionado);
h1Selecionado.addEventListener('click', function()
{
    console.log('clicou em h1');
})       
// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(urlAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroElemento = document.querySelector('.active');
console.log(primeiroElemento);
// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador)