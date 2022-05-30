import Dish1Img from "./dish1.jpeg";
import Dish2Img from "./dish2.jpeg";
import Dish3Img from "./dish3.jpeg";


function contact() {
    const content = document.querySelector("div#content");
    const container = document.createElement('div');
    const dishImages = [Dish1Img, Dish2Img, Dish3Img];

    for (let i = 0; i < 3; i++) {
        let foodItem = document.createElement('div');
        let image = document.createElement('img');

        foodItem.innerText = `Dish ${i + 1} $${i * 2 + 1}`;
        foodItem.classList.add("dish");

        image.src = dishImages[i];

        foodItem.appendChild(image);
        container.appendChild(foodItem);
    }

    container.classList.add("menu");

    content.appendChild(container);    
}

export default contact;