function registrar(nombre='invitado',pais='',correo=''){
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}`;
}

let a=registrar('gino','argentina','gino@gino.com');
let b =registrar();
console.log(a,b);