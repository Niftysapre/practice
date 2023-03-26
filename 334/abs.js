const button = document.querySelector('#button');
const tds = document.querySelectorAll('#atable td');

button.addEventListener('click', function() {
  for (let td of tds) {
    td.textContent = parseInt(td.textContent) * 2;
  }
});