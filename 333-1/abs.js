let table = document.querySelector('#atable');
let addButton = document.querySelector('#sadd-row');

addButton.addEventListener('click', function() {
  let tr = document.createElement('tr');

  for (let i = 1; i <= 3; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  table.appendChild(tr);})