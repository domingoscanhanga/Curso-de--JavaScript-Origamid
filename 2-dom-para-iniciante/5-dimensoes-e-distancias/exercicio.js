// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');
console.log(firstImage);
const firstImageDistanceTop = firstImage.offsetTop;
console.log(firstImageDistanceTop);
// Retorne a soma da largura de todas as imagens
function somaImagem () {
    const images = document.querySelectorAll('img');
    let soma = 0;
    images.forEach((imagem) =>{
    soma += imagem.offsetWidth;
    console.log(imagem.offsetWidth)
})
console.log(soma)
}
window.onload = () => {
    somaImagem();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) =>{
    const linkHeight = link.offsetHeight;
    const linkWidth = link.offsetWidth;
    if (linkHeight >= 40 && linkHeight >= 40)
        console.log('Possui boa acessibilidade');
    else 
        console.log('Nao possui boa acessibilidade');
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const widthBrowser = innerWidth;
const $menu = document.querySelector('.menu')
 if(widthBrowser < 700) {
    $menu.classList.add('active');
    console.log($menu);
 }
    