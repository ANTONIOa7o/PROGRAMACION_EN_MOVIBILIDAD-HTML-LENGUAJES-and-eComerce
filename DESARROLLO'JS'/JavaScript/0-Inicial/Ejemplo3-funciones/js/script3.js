


function funcionMath(){
document.getElementById('resultado').innerHTML=
"logaritmo: "+ Math.log(30)+'<br>'+
"Exponencial: " + Math.exp(8)+'<br>'+
"Raiz Cuadrada: " + Math.sqrt(10)+'<br>'+
"Potencia de 2 elevado a 8: " + Math.pow(2,8)+'<br>'+
"↪Valor Absoluto: " + Math.abs(-6657)+'<br>'+
"Redondea a Baja: " + Math.floor(6.3458)+'<br>'+
"Redondedo al Alza: " + Math.ceil(6.3458)+'<br>'+
"↪Redondeo Medio: " + Math.round(6.3458)+'<br>'+ 
"Random o Semillas: " + Math.random()+'<br>'+
"↪Random personalizado: " + Math.random()*10+'<br>'+
"Valor Maximo: " + Math.max(1,4,6,8)+'<br>'+
"Valor Mínimo: "+ Math.min(1,4,6,8)+'<br>'+
"Coseno Pi: " + Math.cos(Math.PI)+'<br>'

}

function funcionString(){
    var texto="JavaScript, Estructura de Caracteres";
    document.getElementById('resultado').innerHTML=
    "Minusculas: " + texto.toLocaleLowerCase()+'<br>'+
    "Mayusculas: " + texto.toLocaleUpperCase()+'<br>'+
    "Longitud de una cadena: " + texto.length+'<br>'+
    "localizacion de un caracter: " + texto.indexOf('@')+'<br>'+
    "Valores unicode: " +  String.fromCharCode(960)+'<br>'//

}

function funcionDate(){

var fecha = new Date();
//Orientado a objects
document.getElementById('resultado').innerHTML=
"fechas: " + fecha.toLocaleDateString()+'<br>'+
"Hora:Tradicinal " + fecha.toLocaleTimeString()+'<br>'+
"hora: " + fecha.getHours()+'<br>'+
"Minutos. " + fecha.getMinutes()+'<br>'+
"Segundos: " + fecha.getSeconds()+'<br>'+
"Milisegundos: "+ fecha.getMilliseconds()+'<br>'+
"Dia:: " + fecha.getDay()+'<br>'+ // Encontrar explicacion al resultado
"Mes: " + parseInt(fecha.getMonth()+1) + '<br>'// Explicacion del resultado


}