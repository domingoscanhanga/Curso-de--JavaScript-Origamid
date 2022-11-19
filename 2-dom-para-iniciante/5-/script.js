/*
classList
Retorna uma lista com as classes do elemento. Permite adicionar,
remover e verificar se contém.
const menu = document.querySelector('.menu');
menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); //substitui a class
*/
const $menu = document.querySelector('.menu');
$menu.classList.add('activo');
console.log($menu.classList);
// A maneira antiga de adicionar class
$menu.className += 'Duda'
console.log($menu.className);
/*
attributes
Retorna uma array-like com os atributos do elemento.
*/
const animal = document.querySelector('.animais');
console.log(animal.attributes[0]);
console.log(animal.attributes.class);
console.log(animal.attributes.id);
console.log(animal.attributes['data-texto']);
/*
getAttribute e setAttribute
Métodos que retornam ou definem de acordo com o atributo selecionado
*/

const $img = document.querySelector('img');
//getAttribute método que retorna o atributo do elemento
$img.getAttribute('src');
const $imgGetAttribute = $img.getAttribute('src');
console.log($imgGetAttribute);
//setAttribute método que atribui um atribute se o mesmo nao existir, se o mesmo existir atualiza, no console retorna undefined.
const $imgSetAttribute = $img.setAttribute('alt', 'Uma raposa');
console.log($imgSetAttribute);
// hasAttribute método que verifica se um atributo existe em um elemento. 
const $hasAttribute = $img.hasAttribute('alt');
console.log($hasAttribute);
//removeAttribute, metodo que remove um attribute de um elemento html. Retorna undefined no console.
const $removeAttribute = $img.removeAttribute('alt');
console.log($removeAttribute);
 console.log($img.hasAttributes('alt'));
/*
Read Only vs Writable
Existem propriedades que não permitem a mudança de seus
valores, essas são considerados Read Only, ou seja, apenas leitura.
Lembre-se que podemos modificar
o valor de uma propriedade
objeto.propriedade = ''
*/
const animais = document.querySelector('.animais');
animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string
animais.attributes = 'class="ativo"'; // não funciona, read-only