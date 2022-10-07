
function autorizacion() {

    var primerInputFormulario=document.getElementById('nombre').value;
    var segundoInputFormulario=document.getElementById('apellido').value;
    var tercerInputFormulario=document.getElementById('email').value;

    document.getElementById('resultado').innerHTML=
    "Autorización completa para: " +"<br>"+ tercerInputFormulario + " con nombre "
     + primerInputFormulario + " "+ segundoInputFormulario;    
}