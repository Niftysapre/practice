const list = document.getElementById('list');

function addItem(text) {
  const li = document.createElement('li');
  li.innerHTML = `${text} <a href="#" class="delete">удалить</a>`;
  list.appendChild(li);

  const deleteLink = li.querySelector('.delete');
  deleteLink.addEventListener('click', function(event) {
    event.preventDefault();
    li.remove();
  });

  const input = li.querySelector('input');
  input.addEventListener('focus', function() {
    input.value = text;
  });
  input.addEventListener('blur', function() {
    text = input.value;
    li.innerHTML = `${text} <a href="#" class="delete">удалить</a>`;
    addEditHandler(li, text);
  });
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = form.querySelector('input');
  const text = input.value.trim();
  if (text !== '') {
    addItem(text);
    input.value = '';
  }
});

function addEditHandler(li, text) {
  const input = li.querySelector('input');
  input.addEventListener('focus', function() {
    input.value = text;
  });
  input.addEventListener('blur', function() {
    text = input.value;
    li.innerHTML = `${text} <a href="#" class="delete">удалить</a>`;
    addEditHandler(li, text);
  });
}

const array = ['один', 'два', 'три'];
array.forEach(text => {
  addItem(text);
});
