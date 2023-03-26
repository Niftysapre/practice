let links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    let text = this.previousElementSibling;
    text.style.textDecoration = 'line-through';
    this.parentNode.removeChild(this);
  });
});