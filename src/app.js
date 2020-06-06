import {mensajeAlerta, saludo} from './modulos/mensajeAlerta';
import {Persona} from './modulos/clasePersona';

//mensajeAlerta('hola mundi');

//saludo('hola teo');

const carlos=new Persona('juan',27);
const teo = new Persona('esmeralda',22);

carlos.mostrarInfo();
teo.mostrarInfo();