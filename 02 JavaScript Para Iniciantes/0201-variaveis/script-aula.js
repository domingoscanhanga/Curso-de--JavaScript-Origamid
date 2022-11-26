/*
Variáveis
Responsáveis por guardar dados na memória.
Inicia com a palavra var , let ou const
Sintaxe
Palavra chave var seguida do nome, sinal de igual e o valor.
*/
var name = "Domingos";
let age = 26;
const isStudent = true;
/*As variáveis também servem para evitarem repetições
DRY (Don't repeat yourself)
*/
var price = 1200;
var totalComprado = 8;
var precoTotal = price*totalComprado;
console.log(precoTotal);
/*
Nome
Os nomes podem iniciar com $, _, ou letras.
Podem conter números mas não iniciar com eles
Case sensitive
nome é diferente de Nome
Não utilizar palavras reservadas
https://www.w3schools.com/js/js_reserved.asp
Camel case
É comum nomearmos assim: abrirModal
*/
/*
Hoisting
São movidas para cima do código, porém o valor atribuído não é
movido.
*/
console.log(nome);
var nome = 'André';
// Retorna undefined
var profissao = 'Designer';
console.log(profissao);
// Retornar Designer
/*
Mudar o valor atribuído
É possível mudar os valores atribuídos a variáveis declaradas com
var e let . Porém não é possível modificar valores das
declaradas com const
var idade = 28;
idade = 29;
let preco = 50;
preco = 25;
const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
*/


