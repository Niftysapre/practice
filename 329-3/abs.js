let table = document.querySelector('#my-table');

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let j = 0; j < 5; j++) {
		let td = document.createElement('td');
    td.innerText = 'x';
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}