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
  deleteLink.textContent = 'Delete'; 
  deleteLink.href = '#'; 
  deleteLink.addEventListener('click', function() { 
    row.parentNode.removeChild(row); 
  });
  deleteCell.appendChild(deleteLink); 
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(salaryCell);
  row.appendChild(deleteCell); 
  table.appendChild(row);
});


document.body.appendChild(table);
