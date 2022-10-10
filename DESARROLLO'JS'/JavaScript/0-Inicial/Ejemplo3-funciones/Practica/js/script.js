function miHora(){
var hora = new Date();

document.getElementById('resultado').innerHTML=
hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();

}

function cerrar(){
    document.getElementById('resultado').innerHTML="";
}