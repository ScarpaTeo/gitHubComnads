"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "tiene ".concat(nombre, " , y su edad es ").concat(edad);
    }
  };
};

console.log(crearObjeto('teo', 26).mostrarInfo());