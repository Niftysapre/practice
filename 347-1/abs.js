// задаем массив элементов
const arr = ["mama", "papa", "bro", "bro2"];

// находим элемент списка ul, куда будут добавляться элементы массива
const ul = document.querySelector("ul");

// проходимся по каждому элементу массива и создаем для него новый элемент списка li,
// после чего добавляем его в список ul
arr.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});