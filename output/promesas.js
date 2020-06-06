"use strict";

//promesas son sentencias que nos permiten esperar a que suceda algo 
// y dependiendo de lo que succeda se va a ejecutar 
// o no codigo.
var promesa = new Promise(function (resolve, reject) {
  //accion que se ejecutara 
  //resolve();
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve('la operacion tuvo exito');
    } else {
      reject('la operacion fallo');
    }
  }, 4000);
}); //se ejecuta Resolve

promesa.then(function (mensaje) {
  alert(mensaje);
}); //se ejecuta Reject

promesa["catch"](function (mensaje) {
  alert(mensaje);
});