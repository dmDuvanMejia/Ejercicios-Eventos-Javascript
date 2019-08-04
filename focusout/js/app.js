function eventFocusOut(){
    console.log('eventFocusOut');

    var frase = document.getElementById('frase');

    frase.value = frase.value.toUpperCase();
    frase = frase.style.background = 'rgb(148, 220, 248)'
    
}