var mapa;

function mostrarMapa() {

    /*
    1. comprobamos si el dispositivo y el navegar(Entorno) tienes capacidad o soporte de geolocalizacion
    */
    if (navigator.geolocation) {
  /*
  * 2. obtener la ubicacion
  */
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert('Tu dispositivo o navegar no accede a la geolocalizacion');
    }

    /*
    3.Generar la variables de las opciones de nuestro mapa
    */
    var opciones = {
        zoom: 12,
        mapTypeId: google.maps.mapTypeId.ROADMAP

    };
/*
4. Desglose final de la visualizacion del mapa
*/
mapa= new google.maps.Map(document.getElementById('resultado'),opciones);
}


function mostrarLocalizacion() {

    
}

function manejarError() {

}