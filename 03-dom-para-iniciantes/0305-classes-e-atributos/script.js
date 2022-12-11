// Adicione a classe ativo a todos os itens do menu
const $nav = document.querySelectorAll('nav li')
$nav.forEach((item)=>{
  item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
$nav.forEach(item =>{
  item.classList.remove('ativo')
})
$nav[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt 
const $img = document.querySelectorAll('img');
$img.forEach(image =>{
  let hasAlt = image.hasAttribute('alt');  
  console.log(hasAlt);
})
const links = document.querySelectorAll('a[href^="http"]');
links.forEach(link =>{
  link.setAttribute('href', 'https://www.google.com/');
  console.log(link);
})