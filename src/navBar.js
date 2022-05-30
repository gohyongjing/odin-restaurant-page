function navBar() {
    const content = document.querySelector("div#content");
    const bar = document.createElement("div");
    const home = document.createElement("button");
    const contact = document.createElement("button");
    const menu = document.createElement("button");

    home.innerText = "HOME";
    home.id = 'home'

    contact.innerText = "CONTACT";
    contact.id = 'contact';

    menu.innerText = "MENU";
    menu.id = 'menu';

    bar.classList.add("navBar");
    bar.appendChild(home);
    bar.appendChild(contact);
    bar.appendChild(menu);

    content.appendChild(bar);
}

export default navBar;