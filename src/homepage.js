import FoodImg from './food.jpeg';

function homepage() {
    const content = document.querySelector("div#content");
    const home = document.createElement('div');
    const h1 = document.createElement("h1");
    const description = document.createElement("div");
    const img = document.createElement("img");
    
    home.classList.add("home");

    h1.innerText = "Yummy Restaurant";
    description.innerText = "We sell yummy food!";
    description.classList.add("description");

    img.src = FoodImg;

    home.appendChild(h1);
    home.appendChild(description);
    home.appendChild(img);

    content.appendChild(home);
}

export default homepage;