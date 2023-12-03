const toDoList = [
  "Varrer a sala",
  "Passar Esfregona",
  "Limpar o W.C",
  "Montar as mesas",
  "Conferir toalhas e guardanapos",
  "Limpar os vidros",
  "Limpar os Menus",
  "Conferir a reposição das bebidas",
  "Preparar os Couverts",
  "Buscar gelo",
  "conferir as frutas",
  "Conferir carga do multibanco",
];

const list = document.querySelector("ul");

toDoList.forEach((el) => {
  const newLine = document.createElement("li");
  newLine.style.display = "flex";
  newLine.id = "newLine";
  const newCB = document.createElement("input");
  const newText = document.createElement("p");
  newCB.type = "checkbox";
  newCB.id = "cb" + el;
  newText.innerText = el;
  newCB.addEventListener("change", function () {
    if (newCB.checked) {
      newText.style.textDecoration = "line-through";
    } else {
      newText.style.textDecoration = "none";
    }
  });
  newLine.append(newCB, newText);
  list.appendChild(newLine);
});
