let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table = document.querySelector('#atable');

for (let myarr of arr) {
	let tr = document.createElement('tr');
	
	for (let elem of myarr) {
		let td = document.createElement('td');
		td.textContent = elem;
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}