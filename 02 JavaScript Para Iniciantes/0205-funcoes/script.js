// Crie uma função para verificar se um valor é Truthy 
function verificadorDeValor (valor){
  return !!valor;
};
console.log(verificadorDeValor(''));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroDoQuadrado (lado) {
  return lado*4;
};
console.log(perimetroDoQuadrado(4));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName (firstName, secondName){
  return `${firstName} ${secondName}`;
};
console.log(fullName('Domingos', 'Canhanga'));
// Crie uma função que verifica se um número é par
function verificadorDeNumeroPar(number){
  if ((number)%2===0){
    return "É par";
  }
};
console.log(verificadorDeNumeroPar(3));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
};

