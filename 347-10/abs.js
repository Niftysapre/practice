let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let ul = document.createElement('ul');

for (let employee of employees) {
  let li = document.createElement('li');
  li.innerText = `${employee.name} (${employee.age} years old, salary: ${employee.salary})`;
  ul.appendChild(li);
}

document.body.appendChild(ul);
