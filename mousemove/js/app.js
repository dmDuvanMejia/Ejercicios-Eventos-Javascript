function eventMouseMove(event){
    console.log('eventMouseMove');

    document.getElementById('coordenadas').innerText += 'Coordenada: '
         + "(" + event.clientX + ", " + event.clientY + ") => "
         + "Y tus colores son " + 
         (document.getElementById('cuadrado').style.background = '#' 
        + Math.floor(( Math.random() * 999999))) + "\n";
         
}