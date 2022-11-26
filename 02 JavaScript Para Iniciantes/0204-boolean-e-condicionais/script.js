// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
// Retornará NaN
console.log(typeof expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 1340;
var china = 1340;
if(brasil>china)
  console.log("O brasil tem mais habitante");
else if (brasil===china)
  console.log("Têm o mesmo número de habitante");
else 
  console.log("A china tem mais habitante");
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Irá aparecer false 
var corFavorita = 'Verde';
switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}
// olhe para a floresta 