//clases y herencia en Ecmascript

class Usuario{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad
    }
    mostarInfo(item){
        return item;
    }
    mostarInfo2(){
        return `
            nombre: ${this.nombre}<br/>
            edad: ${this.edad} <br/>
            apellido: ${this.apellido}<br/>
            <hr/>

        `;
    }
    
}

class Estudiante extends Usuario{
    //llamamos al contructor de la clase padre y le añadimos nuevos atributos
    constructor(nombre,apellido,edad,carrera){
        super(nombre,apellido,edad);
        this.carrera=carrera;
    }
    //sobrescribimos el metodo de la clase padre
    mostarInfo2(){
        return `
            nombre: ${this.nombre}<br/>
            edad: ${this.edad} <br/>
            apellido: ${this.apellido}<br/>
            carrera: ${this.carrera}<br/>
            <hr/>

        `;
    }
}

//instanciamos el objeto y sus atributos
const carlos=new Usuario('carlos','scarpa',36);

console.log(carlos);
document.write(carlos.mostarInfo2());

const teo=new Estudiante('teo','skarp',26,'developer');
document.write(teo.mostarInfo2());
