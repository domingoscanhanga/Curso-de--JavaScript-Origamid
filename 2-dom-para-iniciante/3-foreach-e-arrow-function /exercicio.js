// Mostre no console cada parágrafo do do site
// Mostre o texto dos parágrafos no console
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(item => {
    console.log(item)
    console.log(item.innerHTML)
    }
    );
/*
Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach(item, index => {
console.log(item, index);
});
let i = 0;
imgs.forEach( => {
console.log(i++);
});
imgs.forEach(() => i++);
*/
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
console.log(item, index);
});
let i = 0;
imgs.forEach(() => {
console.log(i++);
});
imgs.forEach(() => i++);


