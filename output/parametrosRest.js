"use strict";

// nos permiten pasarle a una funcion 
//un numero indefinido de parametros o argumentos
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos('teo', 'scarpa', 26, 'argentina', 'desarrollador', 36974895);