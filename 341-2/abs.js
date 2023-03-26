let paragraphs = document.querySelectorAll('#parent p');

paragraphs.forEach((p) => {
  let span = document.createElement('span');
  let text = p.textContent;
  p.innerHTML = '';
  span.contentEditable = true;
  span.textContent = text;
  p.appendChild(span);

  let deleteLink = document.createElement('a');
  deleteLink.textContent = 'удалить';
  deleteLink.href = '#';
  deleteLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    p.remove(); 
  });

  p.appendChild(deleteLink);
});