let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent; // записываем в инпут текст абзаца

input.addEventListener('imput', function() {
	elem.textContent = this.value;
});