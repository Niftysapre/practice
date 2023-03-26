let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

let ul = document.createElement('ul');

for (let employee of employees) {
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

  let removeLink = document.createElement('a');
  removeLink.href = '#';
  removeLink.innerText = 'Удалить';
  removeLink.addEventListener('click', (event) => {
    event.preventDefault();
    ul.removeChild(li);
  });
  li.appendChild(removeLink);

  ul.appendChild(li);
}

document.body.appendChild(ul);
