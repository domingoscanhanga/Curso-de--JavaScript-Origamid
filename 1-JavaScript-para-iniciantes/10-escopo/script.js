/*
Escopo de Função
Variáveis declaradas dentro de funções não são acessadas fora
das mesmas.
*/
function mostrarCarro () {
    var carro = 'Fusca';
    console.log(carro);
}
//console.log(carro); 
/*
Variável Global (Erro)
Declarar variáveis sem a palavra chave var , const ou let , cria
uma variável que pode ser acessar em qualquer escopo (global).
Isso é um erro.
*/
function mostrarCarro2() {
    carro2 = 'Fusca';
    console.log(carro2);
    }
    mostrarCarro2(); // Fusca
    console.log(carro2); // Fusca
/*
Escopo de Função (Pai)
Variáveis declaradas no escopo pai da função, conseguem ser
acessadas pelas funções.
*/
var carro3 = 'Fusca';
function mostrarCarro3() {
var frase = `Meu carro é um ${carro3}`;
console.log(frase);
}
mostrarCarro3(); // Meu carro é um Fusca
console.log(carro3); // Fusca

/*
Escopo de Bloco
Variáveis criadas com var , vazam o bloco. Por isso com a
introdução do ES6 a melhor forma de declarmos uma variável é
utilizando const e let , pois estas respeitam o escopo de bloco.
*/
if(true) {
    var carro4 = 'Fusca';
    console.log(carro4);
    }
    console.log(carro4); // Carro
/*
Var Vaza o Bloco
Mesmo com a condição falsa, a variável ainda será declarada
utilizando hoisting e o valor ficará como undefined.
*/
if(false) {
    var carro5 = 'Fusca';
    console.log(carro5);
}
console.log(carro5); // undefined
/*
Const e Let no lugar de Var
A partir de agora vamos utilizar apenas const e let para
declarmos variáveis.
*/
if(true) {
const carro = 'Fusca';
console.log(carro);
}
console.log(carro); // erro, carro is not defined
/*
{} cria um bloco
Chaves {} criam um escopo de bloco, não confundir com a
criação de objetos = {}
*/
{
var carro = 'Fusca';
const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

/*
For Loop
Ao utilizar var dentro de um for loop, que é um bloco, o valor do
variável utilizada irá vazar e existir fora do loop.
*/
for(var i = 0; i < 10; i++) {
console.log(`Número ${i}`);
}
console.log(i); // 10

/*
For Loop com Let
Com o let evitamos que o número vaze.
*/
for(let a = 0; a < 10; a++) {
console.log(`Número ${a}`);
}
console.log(a); // a is not defined
/*
Const
Mantém o escopo no bloco, impede a redeclaração e impede a
modificação do valor da variável, evitando bugs no código.
*/
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor
const data = {
dia: 28,
mes: 'Dezembro',
ano: 2018,
}
data.dia = 29; // Funciona
data = 'Janeiro'; // erro

/*
Let
Mantém o escopo no bloco, impede a redeclaração, mas permite a
modi cação do valor da variável.
*/
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019
//let ano = 2020; // erro, redeclarou a variável
//Geralmente vamos utilizar o const .
