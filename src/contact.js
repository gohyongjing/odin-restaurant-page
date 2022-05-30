function contact() {
    const content = document.querySelector("div#content");
    const container = document.createElement('div');

    container.innerText = "contact us";

    content.appendChild(container);    
}

export default contact;