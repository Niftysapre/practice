const rows = document.querySelectorAll('tbody tr');
rows.forEach(row => {
  const linkCell = document.createElement('td');
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Выбрать';
  link.classList.add('select-row');
  linkCell.appendChild(link);
  row.appendChild(linkCell);
});

const links = document.querySelectorAll('.select-row');
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const row = this.parentNode.parentNode;
    if (row.classList.contains('selected')) {
      row.classList.remove('selected');
    } else {
      row.classList.add('selected');
    }
  });
});
