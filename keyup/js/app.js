function eventKeyUp(){
    console.log('eventKeyUp');

    var frase = document.getElementById('frase').value;

    document.getElementById('mensaje').innerText = frase.toUpperCase();
}