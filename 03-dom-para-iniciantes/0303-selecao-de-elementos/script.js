// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensImagens);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');

console.log(animais);
console.log(h2Animais);
// Selecione o último p do site
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
const lastParagraph = paragraphs[--paragraphs.length];
console.log(lastParagraph.innerText);