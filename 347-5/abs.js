const myList = document.getElementById('myList');
const newItemInput = document.getElementById('newItemInput');
const addNewItemBtn = document.getElementById('addNewItemBtn');

myList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
  
    event.target.parentNode.remove();
  }
  else if (event.target.classList.contains('strike-btn')) {
    event.target.parentNode.style.textDecoration = 'line-through';
  }
});

addNewItemBtn.addEventListener('click', function() {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    newItem.innerHTML += ' <button class="delete-btn">Удалить</button> <button class="strike-btn">Перечеркнуть</button>';
    myList.appendChild(newItem);
    newItemInput.value = '';
  }
});
