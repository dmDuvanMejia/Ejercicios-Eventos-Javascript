function eventLoad(){
    var nombre = prompt("Ingresa tú nombre");

    document.getElementById('bienvenida').innerHTML = `Bienvenido a 
        nuestra página de Javascript ${nombre}`
}