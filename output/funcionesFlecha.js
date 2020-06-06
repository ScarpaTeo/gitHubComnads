"use strict";

var nombre = ['teo', 'juan', 'nicolas', 'marcos'];
var numero = nombre.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
}); //funciones tipo flecha 
//(parametro)=> {
//    //codigo a ejecutar
//}