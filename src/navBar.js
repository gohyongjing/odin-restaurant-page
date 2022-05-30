function navBar() {
    const content = document.querySelector("div#content");
    const bar = document.createElement("div");
    const home = document.createElement("div");
    const contact = document.createElement("div");
    const menu = document.createElement("div");

    home.innerText = "HOME";

    contact.innerText = "CONTACT";

    menu.innerText = "MENU";

    bar.classList.add("navBar");
    bar.appendChild(home);
    bar.appendChild(contact);
    bar.appendChild(menu);

    content.appendChild(bar);
}

export default navBar;