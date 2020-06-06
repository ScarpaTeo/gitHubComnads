"use strict";

function registrar() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invitado';
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo);
}

var a = registrar('gino', 'argentina', 'gino@gino.com');
var b = registrar();
console.log(a, b);