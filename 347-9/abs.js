let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

let table = document.createElement('table');

let headerRow = document.createElement('tr');
let nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
let ageHeader = document.createElement('th');
ageHeader.textContent = 'Age';
let salaryHeader = document.createElement('th');
salaryHeader.textContent = 'Salary';
let deleteHeader = document.createElement('th');
deleteHeader.textContent = 'Delete';
headerRow.appendChild(nameHeader);
headerRow.appendChild(ageHeader);
headerRow.appendChild(salaryHeader);
headerRow.appendChild(deleteHeader);
table.appendChild(headerRow);

employees.forEach(function(employee) {
  let row = createRow(employee);
  table.appendChild(row);
});

let form = document.createElement('form');
let nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
let ageLabel = document.createElement('label');
ageLabel.textContent = 'Age:';
let ageInput = document.createElement('input');
ageInput.setAttribute('type', 'number');
let salaryLabel = document.createElement('label');
salaryLabel.textContent = 'Salary:';
let salaryInput = document.createElement('input');
salaryInput.setAttribute('type', 'number');
let addButton = document.createElement('button');
addButton.textContent = 'Add';
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(ageLabel);
form.appendChild(ageInput);
form.appendChild(salaryLabel);
form.appendChild(salaryInput);
form.appendChild(addButton);

document.body.appendChild(table);
document.body.appendChild(form);

addButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  let name = nameInput.value;
  let age = parseInt(ageInput.value);
  let salary = parseInt(salaryInput.value);
  let employee = {name: name, age: age, salary: salary};
  employees.push(employee); 
  let row = createRow(employee);
  table.appendChild(row); 
  nameInput.value = '';
  ageInput.value = '';
  salaryInput.value = '';
});

function createRow(employee) {
  let row = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = employee.name;
  nameCell.setAttribute('contentEditable', 'true');
  let ageCell = document.createElement('td');
  ageCell.textContent = employee.age;
  ageCell.setAttribute('contentEditable', 'true');
  let salaryCell = document.createElement('td');
  salaryCell.textContent = employee.salary;
  salaryCell.setAttribute('contentEditable', 'true');
  let deleteCell = document.createElement('td');
  let deleteLink = document.createElement('a');
  deleteLink.setAttribute('href', '#');
  deleteLink.textContent = 'Delete';
  deleteCell.appendChild(deleteLink);
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(salaryCell);
  row.appendChild(deleteCell);
  
  // добавляем обработчик события для ссылки "Удалить"
  deleteLink.addEventListener('click', function(event) {
  event.preventDefault(); // предотвращаем переход по ссылке
  let index = employees.indexOf(employee);
  if (index !== -1) {
  employees.splice(index, 1); // удаляем работника из массива
  table.removeChild(row); // удаляем ряд из таблицы
  }
  });
  
  return row;
  }