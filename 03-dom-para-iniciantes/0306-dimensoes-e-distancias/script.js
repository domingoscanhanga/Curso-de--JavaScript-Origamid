// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img')
heightImage =firstImage.offsetTop;
console.log(heightImage);
// Retorne a soma da largura de todas as imagens
function somaImage() {
  const allImage = document.querySelectorAll('img');
  let soma = 0;
  allImage.forEach(image =>{
  const widthImage = image.offsetWidth;
 soma += widthImage;
})
console.log(soma)
}
window.onload = ()=> {
  somaImage()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(link =>{
  widthLink = link.offsetWidth;
  heightLink = link.offsetHeight;
  if(widthLink >= 48 && heightLink >=48) {
    console.log(link, 'recomendando')
  }
  else {console.log(link, 'nao recomendando')}
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width:720px)').matches;
if(browserSmall){
  const $menu = document.querySelector('.menu');
  $menu.classList.toggle('menu-mobile');
}
