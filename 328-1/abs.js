let array = ['apple', 'banana', 'orange'];
let ul = document.createElement('ul');

for (let i = 0; i < array.length; i++) {
  let li = document.createElement('li');
  li.textContent = array[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);