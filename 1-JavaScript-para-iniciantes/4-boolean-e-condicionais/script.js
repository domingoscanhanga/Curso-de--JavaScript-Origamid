/*Exercício*/
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var myAge = 56;
var parentAge = 66;
if (myAge>parentAge) console.log("Minha idade é maior");
else if (myAge===parentAge)  console.log("Temos a mesma idade");  
    else console.log("Idade do meu parente é maior");
/// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// RETORNARÁ 3 o último verdadeiro 
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;var china = 1340;
if(brasil>china) console.log("O brasil tem mais habitante");
else console.log("A china tem mais habitante");

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
console.log('Verdadeiro');
} else {
console.log('Falso');
}
//falso


 
