import FoodImg from './food.jpeg';

function homepage() {
    const content = document.querySelector("div#content");
    const h1 = document.createElement("h1");
    const description = document.createElement("div");
    const img = document.createElement("img");
    
    h1.innerText = "Yummy Restaurant";
    description.innerText = "We sell yummy food!";
    description.classList.add("description");

    img.src = FoodImg;

    content.appendChild(h1);
    content.appendChild(description);
    content.appendChild(img);
}

export default homepage;