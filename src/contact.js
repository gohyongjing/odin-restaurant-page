function contact() {
    const content = document.querySelector("div#content");
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const address = document.createElement('div');
    const contact_number = document.createElement('div');
    const email = document.createElement('div');

    h1.innerText = "Contact us!"
    
    address.innerText = "Singapore Food Building #01-23 Food Street S123456";
    address.classList.add("address");

    contact_number.innerText = "1234 5678"
    contact_number.classList.add("contact-number");

    email.innerText = "yummyRestaurant@email.com"
    email.classList.add("email");

    container.classList.add("contact");
    container.appendChild(h1);
    container.appendChild(address);
    container.appendChild(contact_number);
    container.appendChild(email);

    content.appendChild(container);    
}

export default contact;