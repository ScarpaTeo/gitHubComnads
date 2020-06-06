//promesas son sentencias que nos permiten esperar a que suceda algo 
// y dependiendo de lo que succeda se va a ejecutar 
// o no codigo.

const promesa =new Promise((resolve,reject)=>{
    //accion que se ejecutara 
    //resolve();
    setTimeout(()=>{
        const exito=true;
        if(exito){
            resolve('la operacion tuvo exito');
        }else{
            reject('la operacion fallo');
        }
    },4000);
    

});

//se ejecuta Resolve
promesa.then((mensaje)=>{
    alert(mensaje);
});


//se ejecuta Reject
promesa.catch((mensaje)=>{
    alert(mensaje);
});
//-----------------------------------------------------------------
//otro ejemplo de promesa
var promise = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    });