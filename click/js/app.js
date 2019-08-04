function eventClick(numero){
    console.log('eventClick');
    
    var svg = document.getElementById('svg'+numero);
    var numeroAleatorio = Math.floor(Math.random() * 999999);

    svg.childNodes[1].setAttribute("fill", `#${numeroAleatorio}`);

    document.getElementById('mensaje').innerText = 'El código del color que se genero es '
             + numeroAleatorio;

}