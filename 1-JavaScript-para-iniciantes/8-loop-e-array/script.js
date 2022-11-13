/*
Array
É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
*/
var videoGame = ['Switch', 'PS4', 'XBOX'];
videoGame.pop(); // Remove o ultimo item do array e retorna no mesmo
console.log(videoGame); 
videoGame.push('3DS'); // Adiciona elemento na ultima posição do array
console.log(videoGame);


/*
For Loop
Fazem algo repetidamente até que uma condição seja atingida.
*/
for (var numero = 0; numero < 10; numero++) {
console.log(numero);
}// Retorna de 0 a 9 no console
/*
O for loop possui 3 partes,
início , condição e incremento1*/

// While Loop
var i = 0;
while (i < 10) {
console.log(i);
i++;
}
// Retorna de 0 a 9 no console
//O for loop é o mais comum
var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames2.length; i++) {
console.log(videoGames2[i]);
}
/*Break
O loop irá parar caso encontro e palavra break
*/
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
console.log(videoGames[i]);
if(videoGames[i] === 'PS4') {
break;
}
}
/*
forEach
forEach é um método que executa uma função para cada item d Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
*/
videoGames2.forEach(function(a, b){
    console.log(a,b)
})