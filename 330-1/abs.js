let table = document.querySelector('#my-table');
let k = 2;

// создаем 5 рядов
for (let i = 0; i < 5; i++) {
 let tr = document.createElement('tr');

 // в каждом ряду создаем 5 ячеек
 for (let j = 0; j < 5; j++) {
  let td = document.createElement('td');
  td.textContent = k;
  k += 2;
  tr.appendChild(td);
 }

 table.appendChild(tr);
}