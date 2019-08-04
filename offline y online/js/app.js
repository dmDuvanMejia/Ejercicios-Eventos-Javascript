function eventOnline(){
    console.log('eventOnline');
    var nombre = prompt('Ingresa tú nombre');
    document.getElementById('mensaje').innerHTML = `<h3>Bienvenido 
        ${nombre} </h3>
        
        <p>${nombre} tú internet esta de pelos </p>

        <img src="img/Internet.jpg" alt="Hay internet"> </img> 
        `;
}


function eventOffline(){
    console.log('eventOffline');

     document.getElementById('mensaje').innerHTML = `Tú internet esta 
     muy malo, revisa tu conexión

     <img src="img/sinInternet.jpg" alt="No hay internet"> Internet
     desconectado
     </img> 
     
     `
}