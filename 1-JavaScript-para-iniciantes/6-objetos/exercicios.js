// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: "Domingos",
    apelido: "Canhanga",
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
   return `${this.nome} ${this.apelido}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: "labrador",
    idade: 10,
    cor :"preto",
    
    latir (pessoa) {
        if (pessoa === "homem") {
            return "late";
        }
        else {
            return "Não late"
        }
    }
}
console.log(cachorro.latir("homem"))