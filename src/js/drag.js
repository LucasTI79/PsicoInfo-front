function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  event
    .currentTarget
    .style
    .backgroundColor = 'yellow';

    console.log('onDragStart', event)
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

    console.log('onDrop', event)

  const draggableElement = document.getElementById(id);

  const dropzone = event.target;
  draggableElement.backgroundColor = '#4AAE9B';
  
  dropzone.appendChild(draggableElement);
  event
  .dataTransfer
  .clearData();
}

function onDragOver(event) {
  event.preventDefault();
  console.log('onDragOver', event)
}

