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
headerRow.appendChild(nameHeader);
headerRow.appendChild(ageHeader);
headerRow.appendChild(salaryHeader);
table.appendChild(headerRow);


employees.forEach(function(employee) {
  let row = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = employee.name;
  let ageCell = document.createElement('td');
  ageCell.textContent = employee.age;
  let salaryCell = document.createElement('td');
  salaryCell.textContent = employee.salary;
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(salaryCell);
  table.appendChild(row);
});

document.body.appendChild(table);