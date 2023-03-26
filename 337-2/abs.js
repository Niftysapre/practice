let table = document.getElementById("myTable");
let tbody = table.getElementsByTagName("tbody")[0];

let rows = tbody.getElementsByTagName("tr");

for (let i = 0; i < rows.length; i++) {
  let cell = rows[i].insertCell(-1);

  let link = document.createElement("a");
  link.href = "#";
  link.textContent = "Delete";
  
  cell.appendChild(link);

  link.addEventListener("click", function (event) {
    event.preventDefault();
    rows[i].remove();
  });
}
