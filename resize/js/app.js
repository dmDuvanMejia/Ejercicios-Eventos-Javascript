function eventResize(){
    console.log('eventResize');

    var ancho = window.outerWidth;
    
    var mensaje = document.getElementById('mensaje');
    if( ancho >= 992){
        mensaje.innerText = 'Estas desde un dispositivo grande';
    }else if( ancho >= 768){
        mensaje.innerText = 'Estas en una tablet o dispositivo mediano';
    }else {
        mensaje.innerText = 'Estás en un dispositivo móvil';
    }
}