// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const dadosPessoais = {
  firstName: 'Domingos',
  lastName: 'Canhanga',
  age: 25,
};
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: 'labrador',
  corDaPele: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa==='homem') 
    return 'Late'
  },
}
console.log(cachorro.latir("homem"))