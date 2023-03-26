let prg = document.querySelectorAll('#parent p');

prg.forEach((p) => {
  let deleteLink = document.createElement('a');
  deleteLink.href = '#';
  deleteLink.textContent = 'Удалить';

  deleteLink.addEventListener('click', (e) => {
    e.preventDefault();
    p.remove();
  });

  p.appendChild(deleteLink);
});
let spans = document.querySelectorAll('#parent span');

spans.forEach((span) => {
  let input = document.createElement('input');
  input.type = 'text';
  input.value = span.textContent;

  input.addEventListener('blur', () => {
    span.textContent = input.value;
    span.style.display = 'inline';
    input.remove();
  });

  span.addEventListener('click', () => {
    span.style.display = 'none';
    span.parentNode.insertBefore(input, span.nextSibling);
    input.focus();
  });
});