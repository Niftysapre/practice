
let tds = document.querySelectorAll('#table td');

let i = 0;
let colors = ['color1', 'color2', 'color3'];

for (let td of tds) {
	td.addEventListener('click', function() {
		this.classList.add(colors[i]);
		
		i++;
		if (i == colors.length) {
			i = 0;
		}
	});
}