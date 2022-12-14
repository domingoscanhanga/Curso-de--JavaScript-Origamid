// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses 
/*
const linksInternos = document.querySelectorAll('a[href^="#"]');
function handleClick(event){
  event.preventDefault();
  linksInternos.forEach(link =>{
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}
linksInternos.forEach(linkInterno => {
  linkInterno.addEventListener('click', handleClick)
})*/
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const bodyElements = document.querySelectorAll('body *');
/*
function handlElements (event){
  console.log(event.currentTarget)
}
*/
/*
bodyElements.forEach(elements => {
  elements.addEventListener('click', handlElements)
})
*/  

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
function handlElements (event){
  console.log(event.key);
  event.currentTarget.remove()
}
*/
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event){
  console.log(event.key);
  if((event.key==='t')|| (event.key==='T')) {
  document.documentElement.classList.toggle('textomaior');
  }
}
window.addEventListener('keydown', handleClickT);
