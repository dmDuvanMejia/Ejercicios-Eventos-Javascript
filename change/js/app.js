function eventChange(){
    console.log('eventChange');

    profesion = document.getElementById('profesion').value;
  
    document.getElementById('respuestaProfesion').innerText = 
            'La profesión que seleccionaste fue: '  + profesion;

}