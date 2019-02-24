'use strict';
const maxRows = 10;

const inputField = document.querySelector('#input-field');
const addButton = document.querySelector('#add-btn');
const notification = document.querySelector('.notification');
const list = document.querySelector('#list');

inputField.addEventListener('input', function() {
  addButton.disabled = !inputField.value;
});

addButton.addEventListener('click', function() {
  const listLength = document.querySelectorAll('.list-item').length; 
  if(listLength >= maxRows) {
    addButton.disabled = true;
    inputField.disabled = true;
    notification.style.display = 'block';
    inputField.value = '';
  } else {
    let listItem = document.createElement('div');
    listItem.setAttribute('draggable', 'true');
    listItem.className += 'list-item';

    let checkIcon = document.createElement('i');
    checkIcon.className = 'material-icons';
    checkIcon.innerHTML = 'check_box_outline_blank';
    checkIcon.addEventListener('click', function(){
      checkIcon.innerText = 'check_box';
    });

    let listText = document.createElement('p');
    listText.innerHTML = inputField.value;

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'material-icons delete';
    deleteIcon.innerHTML = 'delete';
    deleteIcon.addEventListener('click', function() {
      listItem.remove();
      inputField.value = '';
      inputField.disabled = false;
      notification.style.display = 'none';
    });

    list.appendChild(listItem);
    listItem.appendChild(checkIcon);
    listItem.appendChild(listText);
    listItem.appendChild(deleteIcon);
    
    inputField.value = '';
    addButton.disabled = true;

  }
  //drag&drop
    let dragged = null;

    function handleDragStart(e) {
      this.style.opacity = '0.4';
      dragged = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
    
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'move';  
      return false;
    }
    
    function handleDragEnter(e) {
      this.classList.add('over');
    }
    
    function handleDragLeave(e) {
      this.classList.remove('over'); 
    }
    
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); 
      }
      if (dragged !== this) {
        dragged.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      return false;
    }

    function handleDragEnd(e) {    
      [].forEach.call(d, function (d) {
        d.classList.remove('over');
      });
    }
    let d = document.querySelectorAll('#list-container .list');
    [].forEach.call(d, function(d) {
      d.addEventListener('dragstart', handleDragStart, false);
      d.addEventListener('dragenter', handleDragEnter, false);
      d.addEventListener('dragover', handleDragOver, false);
      d.addEventListener('dragleave', handleDragLeave, false);
      d.addEventListener('drop', handleDrop, false);
      d.addEventListener('dragend', handleDragEnd, false);
    });
});