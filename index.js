var formulario=document.getElementById('form-login')
var pass = document.getElementById('password')
var usuario = document.getElementById('nombre-usuario')
var correo = document.getElementById('email')
var fecha = document.getElementById('fecha-nac')



var expCorreo= RegExp ("([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)\.([a-zA-Z0-9]){3}")
var expContrase= RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}')

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var error= ""

    if(!pass.value.match(expContrase)){
        error+= "Contraseña debe contener caracter especial, numero, letra mayuscula y minuscula "
    }if(!correo.value.match(expCorreo)){
        error+= "Direccion de correo no valida"
    }if(fecha.value<h('01/01/2023')){
        error+= "fecha debe ser menor que el actual"
    }
    if(error==""){
        //aca cuando se produce sin error, se envian nombre y contraseña
        window.comunicacion.registroValido([nombre.value,pass.value]);
    }else{
        alert(error)
    }

})

//aca estaba la funcion para mandar alerta y se mueve a ventana 2 para mostrar alli