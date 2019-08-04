function eventBlur(id){
    console.log('eventBlur');
    
    var elemento = document.getElementById(id);
    elemento.value = elemento.value.toUpperCase();
}