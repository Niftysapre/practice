const list = document.getElementById("parent");
const items = list.getElementsByTagName("p");

for (let i = 0; i < items.length; i++) {
  const removeLink = document.createElement("a");
  removeLink.href = "#";
  removeLink.textContent = "remove";

  items[i].appendChild(removeLink);

  removeLink.addEventListener("click", function (event) {
    items[i].remove();
    event.preventDefault();
  });
}
