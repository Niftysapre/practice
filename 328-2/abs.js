let arr = ['apple', 'banana', 'orange'];

let ul = document.getElementById('elem');

for (let i = 0; i < arr.length; i++) {
  let li = document.createElement('li');
  li.textContent = arr[i];
  li.addEventListener('click', () => console.log(li.textContent)); 
  ul.appendChild(li);
}

document.body.appendChild(ul); // выводится в консоль