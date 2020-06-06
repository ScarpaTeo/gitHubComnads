const persona=['teo',26,'desarrollador'];
const persona2=['juan',36,'PO'];

//desestructurar significa convertir los valores del arreglo a variables

const [nombre,edad,profesion,pais='no esp']=persona;

//console.log(nombre,edad,profesion);

const mostrarInfo=([nom,ed,pa]=item)=>{
    console.log(nom,ed,pa);
}

const mostrar=([a,b,c]=item)=>console.log(a,b,c);

mostrarInfo(persona2);
mostrar(persona);
