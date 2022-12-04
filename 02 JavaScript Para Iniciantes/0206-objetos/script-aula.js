const pessoa = {
  nome: "Domingos Canhanga",
  idade:0,
  profissao: 'Técnico de T.I',
  maiorDeIdade() {
    if (this.idade>= 18)
      return "Maior de idade"
    else
      return "Menor de idade"
  }
}
pessoa.idade= 12;
console.log(pessoa.maiorDeIdade());
console.log(pessoa.maiorDeIdade());
pessoa.estadoCivil= "casado";
console.log(pessoa.hasOwnProperty("maiorDeIdade"));
