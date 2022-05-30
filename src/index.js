import navBar from "./navBar.js";
import homepage from "./homepage.js";
import contact from "./contact.js";
import menu from "./menu.js";

import './style.css';

const _ = ((document) => {
    const clearPage = () => {
        const content = document.querySelector("div#content");
        for (const element of content.childNodes) {
            if (! element.classList.contains("navBar")) {
                element.remove();
            }
        }
    };
    
    navBar();
    homepage();

    const navButtons = document.querySelectorAll(".navBar > button");    
    const contents = {'home': homepage,
                    'contact': contact,
                    'menu': menu};
    
    navButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            clearPage();
            const contentFiller = contents[button.id];
            contentFiller();
        })
    });
})(document);
