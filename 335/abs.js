const parent = document.getElementById('parent');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerText = parent.children.length + 1;

    parent.appendChild(newLi);

    newLi.addEventListener('click', () => {
        parent.removeChild(newLi);
    });
});

for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].addEventListener('click', () => {
        parent.removeChild(parent.children[i]);
    });
}
