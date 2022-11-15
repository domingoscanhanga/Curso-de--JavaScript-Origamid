// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);// correção 
  }
 // console.log(cor, marca, portas); o erro
 // Como corrigir o erro abaixo?
const dois = 2; // correção.
function somarDois(x) {
    //const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
// O que fazer para total retornar 500?
//var numero = 50;
const numero = 50;

//for(var numero = 0; numero < 10; numero++) 
for (let numero =0; numero < 10; numero++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

