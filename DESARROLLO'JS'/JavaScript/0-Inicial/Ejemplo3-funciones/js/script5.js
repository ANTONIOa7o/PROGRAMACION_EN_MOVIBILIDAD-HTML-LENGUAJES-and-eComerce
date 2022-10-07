


function mensaje() {

    var a = document.getElementById('nombre').value;
    var b = document.getElementById('apellido').value;

    /*
    Forma directa de acceso a los valores de una variable
    var a=nombre.value;
    var b=apellido.value;
    */
    document.getElementById('resultado').innerHTML =
        "Reserva Confirmada a: " + a + " " + b;

}

function limpiar() {
    document.getElementById('resultado').innerHTML = "";

}