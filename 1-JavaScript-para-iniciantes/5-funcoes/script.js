/* FUNÇÕES
Bloco de código que pode ser executado e reutilizado. Valores
podem ser passados por uma função e a mesma retorna outro
valor. */
function areaQuadrado () {
   console.log('Função ativa');
}
areaQuadrado();
/*
Ao criar uma função, você pode definir parâmetros .
Ao executar uma função, você pode passar argumentos .
*/
function imc(peso, altura)// Peso e altura são parâmetros 
{ 
   const imc = peso / (altura**2);
   return imc;
} 
imc(80, 1.80); // 80 e 1.80 são argumento da função 
console.log(imc(80, 1.80));

function corFavorita (cor) {
   if(cor === 'azul') {
      return 'Eu gosto do ceu';
   }
   else if (cor ==='verde') {
      return 'Eu gosto do mato'
   }
   else { return 'Eu não gosto de nada'}
}
console.log(corFavorita(''))
/*
Argumentos podem ser funções
Chamadas de Callback, geralmente são funções que ocorrem após
algum evento. 
*/
addEventListener('click', function() {
   console.log('Clicou');
   });
   // A função possui dois argumentos
   // Primeiro é a string 'click'
   // Segundo é uma função anônima
  /* Funções anônimas são aquelas em
   que o nome da função não é
   definido, escritas como
   function() {} ou () => {}
   */

 function imc2 (altura, peso) {
   const imc = peso / (altura ** 2);
   console.log(imc);
 }
 imc2(1.80, 50); // retorna imc2
 console.log(imc2(1.70, 85)) // retorna imc2 mais undefined
/*
Valores retornados
Uma função pode retornar qualquer tipo de dado e até outras funções.
*/
function terceiraIdade(idade){
   if (typeof idade !== "number") {
      return "Informe a sua idade";
   }
   else if (idade >= 60) {
      return true;
   }
   else return false;
}

/*
Valores retornados
Uma função pode retornar qualquer tipo de dado e até outras funções.
*/
function precisoVisitar (paisesVisitados) {
   const totalPais = 193;
   return`Falta visitar ${totalPais - paisesVisitados} paises`;
}
/*
Escopo Léxico
Funções conseguem acessar variáveis que foram criadas no contexto pai
*/
var profissao = "Design";
function dados () {
   var none = "André";
   var idade = 28;
   function outrosDados () {
      var endereco = "Rio de Janeiro";
      var idade = 29;
      return `${none}, ${idade}, ${endereco}, ${profissao}`;
   } 
   return outrosDados ();
}
