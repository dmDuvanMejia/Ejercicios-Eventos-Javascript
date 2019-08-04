function eventDrag(event){
    console.log('eventDrag ' + event);
    event.dataTransfer.setData("text", event.target.id);
}

function eventDrop(event){
    console.log('eventDrop ' + event);
    event.preventDefault();
    var data = event.dataTransfer.getData('text');

    event.target.appendChild(document.getElementById(data));
    
    var imagen = document.createElement('img');
    if(data == 'programar'){
        source = `img/${data}.png`;
    }else{
        source = `img/${data}.jpg`;
    }
    imagen.setAttribute('src', source);
    imagen.setAttribute('width', '200px');
    document.getElementById('preferencias').appendChild(imagen);
    
}

function eventDragOver(event){
    console.log('eventDragOver ' + event );
    event.preventDefault();
}