const usuario={
    nombre:'teo',
    correo:'teo@teo.com',
    pais:'argentina',
    edad:26
}

//const {nombre,correo,pais}=usuario;

const mostrarInfo=({nombre,correo,pais,edad}=x)=>console.log(`el nombre es ${nombre}, su correo:${correo}, y su pais:${pais}, tiene la edad:${edad}`);

//console.log(correo,pais);

mostrarInfo(usuario);