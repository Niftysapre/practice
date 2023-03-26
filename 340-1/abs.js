let lis = document.querySelectorAll('ul li');

for (let li of lis) {
  li.addEventListener('click', function() {
    const input = document.createElement('input');
    input.value = li.textContent;
    li.textContent = '';
    li.appendChild(input);
    input.addEventListener('blur', function() {
      li.textContent = this.value;
    });
    input.focus();
  });
}