


/* var nombre="Antonio";
var apellidos="Cuadrado";
var edad=22; */

var nombre=window.prompt('Introduce tu nombre:');
var apellidos=window.prompt('Introduce tu primer apellido');
var edad=window.prompt('Cual es tu edad?');



document.write('<h2>Bienvenido!!!</h2>'+'<br>'
+'A : ' + nombre +'<br>'
+ ' con el apellido : ' + apellidos+ '<br>'
+ 'y con edad: ' + edad + ' años'+ '<br>'+'A mi 2º Pagina de script inyectado');

/*
window.promt() -> Genera un dialogo entre el usuario y el desarrollador, en la interfaz del usuario que contiene de 
menera predeterminada(sistema operativo un input en una linea, dos botones- aceptar y cancelar )
Recomendacion junto a Advertencia, siempre devuelve un STRING.
*/