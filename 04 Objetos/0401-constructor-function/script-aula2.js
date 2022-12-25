/*
const Dom = {
   seletor:'li',
   element(){
    return  document.querySelector(this.seletor);
   },
   ativar(){
    this.element().classList.add('ativar');
   }
}
Dom.ativar()
*/ 
function Dom (seletor){
  this.element = function(){
    return document.querySelector(seletor);
  }
  this.ativar = function () {
    this.element().classList.add('ativar');
  }
}
const li = new Dom('li');
li.ativar();
const boby = new Dom ('body');
boby.ativar();
