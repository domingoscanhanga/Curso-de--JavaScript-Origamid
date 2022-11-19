/*
Parâmetros do forEach
O primeiro parâmetro é o callback, ou seja, a função que será
ativada a cada item. Esse função pode receber três parâmetros:
valorAtual, index e array;
*/
/*const imgs = document.querySelectorAll('img');
imgs.forEach(function(item,index,array){
    console.log(item, index, array);
})
*/
/*
forEach e Array
forEach é um método de Array, alguns objetos array-like possuem
este método. Caso não possua, o ideal é transformá-los em uma
array.
*/
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
    console.log(item);
}) 

/*
Arrow Function
Sintaxe curta em relação a function expression . Basta
remover a palavra chave function e adicionar a fat arrow => após
os argumentos.
*/
/*
Forma global 
múltiplos argumentos precisam de parênteses
 */
titulosArray.forEach((item,index) =>{
    console.log(item,index);
}) 
/* 
Com apenas um argumento 
argumento único não precisa de parênteses
*/
titulosArray.forEach(item =>{
    console.log(item);
}) 
/*
 Sem argumento 
 sem argumentos precisa dos parênteses, mesmo vazio
*/
let item = 0;
titulosArray.forEach(() =>{
    console.log(item++);
})

/* 
É possível omitir as chaves {} para uma função que retorna uma
linha.
Não é permitido fechar a linha
com ;
*/
titulosArray.forEach(item => console.log(item)) 



