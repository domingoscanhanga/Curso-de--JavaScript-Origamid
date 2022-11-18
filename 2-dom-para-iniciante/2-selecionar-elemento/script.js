const primeiroUl = document.querySelector('ul');
//selecionar os links interno
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
// HmtlColettion vs nodelist
primeiroUl.classList.add("grid-section");
const htmlCollection = document.getElementsByClassName('grid-section');
console.log(htmlCollection.length);
const nodeList = document.querySelectorAll(".grid-section");
console.log(nodeList.length);
nodeList.forEach(function(item, index)
{
    console.log(item);
    console.log(index);
})
// Transformando array like em array 
const arrayGrid = Array.from(htmlCollection);