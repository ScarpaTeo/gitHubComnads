const crearObjeto=(nombre,edad)=>{

    saludar=()=>{
        console.log("hola")
    }
    return{
        nombre:nombre,
        edad:edad,
        mostrarInfo(){
            return `tiene ${nombre} , y su edad es ${edad}`;
        },
        saludar2(){
            console.log("hola")
        }
    }
}

console.log(crearObjeto('teo',26).mostrarInfo());
console.log(crearObjeto('teo',26).saludar2());