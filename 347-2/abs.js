const arr = ["mama", "papa", "bro", "bro2"];
const ul = document.querySelector("ul");

arr.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = li.textContent;
 
    li.textContent = "";
    li.appendChild(input);
    
    input.addEventListener("blur", () => {
      li.textContent = input.value;
    });
  });
  
  ul.appendChild(li);
});