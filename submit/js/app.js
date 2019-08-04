function eventSubmit(){
    console.log('eventSubmit');
    
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    if(nombre === ''){
        alert('El nombre es obligatorio')
    }
    if(edad === ''){
        alert('La edad es obligatoria');
    }
    if(edad != '' && nombre != ''){
        alert('Has enviado los datos del formulario al servidor')
    }


}