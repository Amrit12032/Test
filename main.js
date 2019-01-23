dragged = (event) => {
    let element = event.target;
element
    .parentElement
    .setAttribute('style', 'position: absolute; left: ' + (event.pageX-event.width/2) + 'px; top: ' + (event.pageY-event.height/2) + 'px');
    console.log(event);
}