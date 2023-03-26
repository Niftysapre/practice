let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

let ul = document.createElement('ul');

for (let employee of employees) {
  let li = createEmployeeListItem(employee);
  ul.appendChild(li);
}

let form = document.createElement('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let nameInput = form.elements['name'];
  let ageInput = form.elements['age'];
  let salaryInput = form.elements['salary'];

  let employee = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    salary: parseInt(salaryInput.value)
  };

  let li = createEmployeeListItem(employee);
  ul.appendChild(li);

  nameInput.value = '';
  ageInput.value = '';
  salaryInput.value = '';
});

let nameLabel = document.createElement('label');
nameLabel.innerText = 'Имя: ';
let nameInput = document.createElement('input');
nameInput.name = 'name';
form.appendChild(nameLabel);
form.appendChild(nameInput);

let ageLabel = document.createElement('label');
ageLabel.innerText = 'Возраст: ';
let ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.name = 'age';
form.appendChild(ageLabel);
form.appendChild(ageInput);

let salaryLabel = document.createElement('label');
salaryLabel.innerText = 'Зарплата: ';
let salaryInput = document.createElement('input');
salaryInput.type = 'number';
salaryInput.name = 'salary';
form.appendChild(salaryLabel);
form.appendChild(salaryInput);

let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Добавить';
form.appendChild(submitButton);

document.body.appendChild(ul);
document.body.appendChild(form);

function createEmployeeListItem(employee) {
  let li = document.createElement('li');

  let nameSpan = document.createElement('span');
  nameSpan.innerText = employee.name;
  nameSpan.addEventListener('click', () => {
    let input = document.createElement('input');
    input.value = employee.name;
    input.addEventListener('blur', () => {
      employee.name = input.value;
      nameSpan.innerText = input.value;
      li.removeChild(input);
    });
    li.insertBefore(input, nameSpan);
  });
  li.appendChild(nameSpan);

  let ageSpan = document.createElement('span');
  ageSpan.innerText = employee.age;
  ageSpan.addEventListener('click', () => {
    let input = document.createElement('input');
    input.value = employee.age;
    input.addEventListener('blur', () => {
      employee.age = parseInt(input.value);
      ageSpan.innerText = input.value;
      li.removeChild(input);
    });
    li.insertBefore(input, ageSpan);
  });
  li.appendChild(ageSpan);

  let salarySpan = document.createElement('span');
  salarySpan.innerText = employee.salary;
  salarySpan.addEventListener('click', () => {
    let input = document.createElement('input');
    input.value = employee.salary;
    input.addEventListener('blur', () => {
      employee.salary = parseInt(input.value);
      salarySpan.innerText = input.value;
      li.removeChild(input);
    });
    li.insertBefore(input, salarySpan);
  });
  li.appendChild(salarySpan);
  
  let deleteLink = document.createElement('a');
  deleteLink.innerText = 'удалить';
  deleteLink.href = '#';
  deleteLink.addEventListener('click', () => {
  ul.removeChild(li);
  });
  li.appendChild(deleteLink);
  
  return li;
  }
