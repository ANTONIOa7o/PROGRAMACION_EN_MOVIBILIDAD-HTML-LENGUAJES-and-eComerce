var n1=parseFloat(window.prompt("Introduce tu primer numero:"));
var n2=parseFloat(window.prompt("Introduce el segundo numero"));


function sumar(){
    var resultado=n1+n2;

swal("La suma es. " + resultado); 

}
function restar(){
    var resultado=n1-n2;
    swal("la resta es: "+ resultado); 

}
function multiplicar(){
    var resultado=n1*n2
    swal("la multiplicacion es:" + resultado); 

}
function dividir(){
    swal("La division seria: "+ (n1/n2)); //resultado

}
