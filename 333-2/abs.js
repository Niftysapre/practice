function addRowAndColumn() {
  let trs = document.querySelectorAll('#atable tr');

  //добавляем новый столбец в каждую строку
  for (let tr of trs) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  //добавляем новую строку
  let newRow = document.createElement('tr');
  let td1 = document.createElement('td');

  newRow.appendChild(td1);
  newRow.appendChild(td2);
  document.querySelector('#atable').appendChild(newRow);
}

//назначаем обработчик на кнопку
document.querySelector('#addBtn').addEventListener('click', addRowAndColumn);