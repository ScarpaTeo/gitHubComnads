//Ejemplo 1 
const Usuarios

async function Enviardatos (){
    let nombre = "juan"
    let pass="123"

    let formulario = new FormData()
    formulario.append("nombre" = nombre)
    formulario.append("pass"=pass)

    try {
        let config= {
            method:'POST',
            body: JSON.stringify(formulario),
            headers:{
                'Conten-Type' : 'application-Json',
                'token':"123123247ruwehjfsdnfsd9q3hnad"
            }
        }
        fetch('http://ejemplo.com/usuarios',config)
        .then( respuesta => respuesta.json())
        .then(Usuarios= respuesta.data )
    } catch (error) {
        console.log(error)
    }
}

//Ejemplo2 
//enviar datos de un formulario a una API con fetch

var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
});

//Ejemplo3 
//manejar un formulario con los event listener y despues mandar el formulario

var formulario = document.getElementById("formulario") //el Id del la etiqueta form

//accedemos al boton submite de form 
formulario.addEventListener("submit",e=>{
    e.preventDefault()
    
    //obtenemos los valores del form
    var datosForm = new FormData(formulario)
    
    //hacemos el fetch
    fetch('http://info/usuarios',{
        method:'POST',
        body: datosForm,
        headers:{
            'conten-type':'application/Json',
            'token':'adsasdasdasdfsdfsadf'
        }
    })
        .then( res => res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(error=> console.log(error))
})