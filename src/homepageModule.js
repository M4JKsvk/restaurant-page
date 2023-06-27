function renderHomepage() {
    
const content = document.getElementById("content");

const image = document.createElement("img");

image.setAttribute('src', "/img/LINE_ALBUM_Random stuff_220614_0.jpg")
image.style.width = "50px";
image.style.height = "100px";

const header = document.createElement("h1");
header.textContent = "Amazing Restaurant";

const description = document.createElement("p");
description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, dolorum provident. Ullam voluptatum vel laboriosam recusandae itaque ipsum, error corporis repellendus consequatur sapiente incidunt porro cum mollitia saepe dolor animi!";


content.appendChild(image);
content.appendChild(header);
content.appendChild(description);
}

export {renderHomepage};