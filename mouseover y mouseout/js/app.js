function eventMouseOver(){
    console.log('eventMouseOver');

    document.getElementsByTagName('img')[0].style.width = '150px';
}

function eventMouseOut(){
    console.log('eventMouseOut');

    document.getElementsByTagName('img')[0].style.width = ' 100px';
}