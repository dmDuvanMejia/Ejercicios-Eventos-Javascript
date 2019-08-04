function eventFocus(campo){
    console.log('eventClick');
    
    var campo = document.getElementById(campo);
    if( campo.value !== ''){
       campo.style.background = '#9AFCD0';
    }else{
        campo.style.background = '#FB4A4A';
    }
}