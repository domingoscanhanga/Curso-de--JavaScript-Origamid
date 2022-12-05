// Mostre no console cada parágrafo do do site
const paragraph = document.querySelectorAll('p');
paragraph.forEach(onlyParagraph => console.log(onlyParagraph));
paragraph.forEach(textParagraph =>console.log(textParagraph.innerText));
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) =>{
console.log(item, index);
});
let i = 0;
imgs.forEach(()=> {
console.log(i++);
});
imgs.forEach(() => i++);
