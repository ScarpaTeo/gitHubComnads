"use strict";

var texto = 'hola mundo'; //metodos para cadenas de texto 

console.log(texto, 'empieza con a:', texto.toLowerCase().startsWith('a'));
console.log(texto, 'termina con a:', texto.toLowerCase().endsWith('o'));
console.log(texto.includes('mundo')); //metodos para arreglos

var amigos = ['carlos', 'cesar', 'manuel'];
console.log(amigos.includes('carlos'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 4;
})); // buscar la posicion en un arreglo de un elemento 

console.log(amigos.findIndex(function (amigo) {
  return amigo === 'manuel';
}));