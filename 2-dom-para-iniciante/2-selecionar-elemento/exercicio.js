// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);
// Retorne no console apenas as imagens que começaram com a palavra imagem **
const imageImagens =document.querySelectorAll('img[src^="img/imagem"]');
console.log(imageImagens);
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2InAnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log (firstH2InAnimaisDescricao);
// Selecione o último p do site **
const lostP = document.querySelectorAll('p');
console.log(lostP[--lostP.length]);
