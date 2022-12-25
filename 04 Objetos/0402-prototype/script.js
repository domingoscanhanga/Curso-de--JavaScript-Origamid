// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobreNome, idade){
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.idade = idade;
}
// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoa.prototype.NomeCompleto = function(){
  return `${this.nome} ${this.sobreNome}`
}
const canhanga = new Pessoa('Domingos', 'Canhanga', 26);
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();// Qual o construtor do dado abaixo:
li.hidden.constructor.name;