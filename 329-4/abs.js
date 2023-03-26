function createTable() {
	const width = document.getElementById('width').value;
	const height = document.getElementById('height').value;
  
	const table = document.getElementById('my-table');
	table.innerHTML = '';
  
	for (let i = 0; i < height; i++) {
	  const row = table.insertRow(i);
	  for (let j = 0; j < width; j++) {
		const cell = row.insertCell(j);
		cell.innerText = `(${i}, ${j})`;
	  }
	}
  }