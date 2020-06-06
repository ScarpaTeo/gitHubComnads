const texto='hola mundo';

//metodos para cadenas de texto 

console.log(texto, 'empieza con a:',texto.toLowerCase().startsWith('a'));

console.log(texto, 'termina con a:',texto.toLowerCase().endsWith('o'));

console.log(texto.includes('mundo'));

//metodos para arreglos

const amigos=['carlos','cesar','manuel'];
console.log(amigos.includes('carlos'));

console.log(amigos.find((amigo)=>amigo.length > 4));

// buscar la posicion en un arreglo de un elemento 

console.log(amigos.findIndex((amigo)=>amigo === 'manuel'));