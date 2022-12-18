function Estudante(nome, curso, numeroDeEstudante) {
  this.nome = nome;
  this.curso = curso;
  this.numeroDeEstudante = numeroDeEstudante;
}

const arsenio = new Estudante('Arsênio', 'ET', 180123);

function Carro(marca, precoInicial){
  const taxa = 0.2;
  this.marca = marca;
  this.precoFinal = taxa*precoInicial;
}
const kiaRio = new Carro('Kia Rio', 1200);
