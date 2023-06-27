function renderMenu() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  header.textContent = "Amazing Menu";

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, dolorum provident. Ullam voluptatum vel laboriosam recusandae itaque ipsum, error corporis repellendus consequatur sapiente incidunt porro cum mollitia saepe dolor animi!";

  content.appendChild(header);
  content.appendChild(description);
}

export { renderMenu };
