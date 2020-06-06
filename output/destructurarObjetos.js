"use strict";

var usuario = {
  nombre: 'teo',
  correo: 'teo@teo.com',
  pais: 'argentina',
  edad: 26 //const {nombre,correo,pais}=usuario;

};

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x,
      nombre = _ref.nombre,
      correo = _ref.correo,
      pais = _ref.pais,
      edad = _ref.edad;

  return console.log("el nombre es ".concat(nombre, ", su correo:").concat(correo, ", y su pais:").concat(pais, ", tiene la edad:").concat(edad));
}; //console.log(correo,pais);


mostrarInfo(usuario);