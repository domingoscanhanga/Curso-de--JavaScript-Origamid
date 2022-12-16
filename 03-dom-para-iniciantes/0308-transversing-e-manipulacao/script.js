// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const novoMenu = menu.cloneNode(true);
copy.appendChild(novoMenu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const firstDt = faq.children[1].children[0];
console.log(firstDt);
// Selecione o DD referente ao primeiro DT
const firstDd = faq.children[1].children[1];
console.log(firstDd);
// Substitua o conteúdo html de .faq pelo de .animais

