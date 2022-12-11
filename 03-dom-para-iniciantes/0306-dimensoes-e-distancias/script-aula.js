const listaAnimais = document.querySelector('.animais-lista');
const altura = listaAnimais.getBoundingClientRect();
const altura2 = listaAnimais.offsetHeight;

console.log(altura.height, window.pageYOffset, altura2);