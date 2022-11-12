/*
Objetos
Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
*/
var pessoa = {
    none: "André",
    idade: 29,
    possuiFaculdade: true,
    profissao: "Design",
}
pessoa.idade;
console.log(pessoa.idade);
/*
Propriedades e métodos consistem em nome (chave) e valor
Métodos
É uma propriedade que possui uma função no local do seu valor.
*/
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado*lado;
    },
    perimetro (lado) {
        return this.lados*lado;
    }
}
console.log(quadrado.perimetro(4));
/*
Organizar o Código
Objetos servem para organizar o código em pequenas partes reutilizáveis.
*/
Math.PI; // 3.14
Math.random(); // número aleatório
var pi = Math.PI;
console.log(Math.random());
//Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

/*
 Criar um objeto
 cria-se um objeto utilizando chaves  
*/
var clube = {};
console.log(typeof clube); 
/*
Dot Notation Get
Acesse propriedades de um objeto utilizando o ponto .
*/
var menu = {
width: 800,
height: 50,
backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'
console.log(menu.backgroundColor);
/*
Dot Notation Set
Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
*/
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'
/*
Adicionar Propriedades e Métodos
Basta adicionar um novo nome e de nir o valor.
*/
menu.position = "fixed";
/*
    Palavra chave 
    this irá fazer uma referência ao próprio objeto.
*/ 
var height = 120;
menu.metadeDeHeight = function () {
    return this.height / 2;
}
/*
Protótipo e Herança
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
*/
menu.hasOwnProperty("width"); // hasOwnProperty é um método de Object
console.log(menu.hasOwnProperty("metadeDeHeight"));




