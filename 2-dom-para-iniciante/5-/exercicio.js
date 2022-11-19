// Adicione a classe ativo a todos os itens do menu
const $menuItem = document.querySelectorAll('.menu a');
console.log($menuItem);
$menuItem.forEach(itensMenu => 
    itensMenu.classList.add('ativo'))
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
$menuItem.forEach(itensMenu => 
    itensMenu.classList.remove('ativo'))
$menuItem[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const $imgs = document.querySelectorAll('img');
$imgs.forEach( ($img) => {
    const possuiAtributo = $img.hasAttribute("alt");
    console.log($img, possuiAtributo);
})
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);