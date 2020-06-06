"use strict";

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; //creamos un arreglo y se lo pasamos a la funcion


var lista = ['teo', 'emmanuel', 23];
mostrarDatos.apply(void 0, lista);