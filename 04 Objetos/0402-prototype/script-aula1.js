function Pessoa0 (nome, idade){
}
console.log(Pessoa0.prototype);
function Pessoa2(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    return this.nome + ' Andou pelo objeto';
  }
}
const arsenio = new Pessoa2('Arsenio', 27);
const domingos = new Pessoa2('Domingos', 26);
Pessoa2.prototype.andar = function(){
  return this.nome + ' andou';
}
console.log(domingos.andar());
console.log(Pessoa2.prototype.andar());
console.log(Pessoa2.prototype);
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar(){
    return true;
  },
}