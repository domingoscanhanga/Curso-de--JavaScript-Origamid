const firstArgument = 14,
      secondArgument = 4;
function somarDoisNumeros(firstParameter, secondParameter){
  return firstParameter + secondParameter;
}
console.log(somarDoisNumeros(firstArgument, secondArgument));
console.log(somarDoisNumeros(20, secondArgument,));

function calculoDeMedia(primeiraNota, segundaNota) {
  media =(primeiraNota + segundaNota)/2;
    if(media>=14) {
      return 'Aprovado';
      console.log('A função terminar na linha acima,a linha do return, eu nao serei exibo no console');
    }
    else if (media<=13 && media>=7){
      console.log('Eu serei exibido no console');
    return 'Exame oral';
    console.log('A função terminar na linha acima,a linha do return, eu nao serei exibo no console');
   
  }
  else {
    return 'Exame';
  }
}
console.log(calculoDeMedia(12,));