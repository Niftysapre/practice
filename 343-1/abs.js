let elem = document.querySelector('#elem');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', function() {
  elem.classList.toggle('hidden');
});
