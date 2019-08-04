function eventKeyPress(){
    console.log('eventKeyPress');
    var frase = document.getElementById('frase').value;

    document.getElementById('cantidad').innerText = frase.toUpperCase();
}