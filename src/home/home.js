export { createDOMElements };
import stoveImg from "./stove.jpeg";

function createDOMElements(container){
    // home container
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-container");

    // hero section
    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero-container");
    const heroContentDiv = document.createElement("div");
    heroContentDiv.classList.add("hero-content-container");
    const heroHeader = document.createElement("h2");
    const homeImage = document.createElement("img");
    homeImage.src = stoveImg;
    homeImage.height = 240;
    const heroPara = document.createElement("p");
    heroHeader.textContent = "Wood-Fired Perfection Since 2016";
    heroPara.textContent = 
    `Experience authentic Neapolitan pizza crafted with passion and baked at 480°C in our handmade wood-fired oven.
    Every pie is a masterpiece of charred crust, house-made sauce, and the finest Italian ingredients.
    From classic Margheritas to bold, creative combinations, we bring the soul of Naples to your table.`;
    heroContentDiv.append(homeImage, heroPara);
    heroDiv.append(heroHeader,heroContentDiv);

    // opening hours section
    const openingHoursDiv = document.createElement("div");
    openingHoursDiv.classList.add("opening-hours-container");
    const hoursHeader = document.createElement("h2");
    const hoursPara1 = document.createElement("p");
    const hoursPara2 = document.createElement("p");
    const hoursPara3 = document.createElement("p");
    hoursHeader.textContent = "Opening Hours";
    hoursPara1.textContent = "Monday-Thursday: 1pm - 10pm"
    hoursPara2.textContent = "Friday & Saturday: 1pm - 1am"
    hoursPara3.textContent = "Sunday: CLOSED"
    openingHoursDiv.append(hoursHeader, hoursPara1, hoursPara2, hoursPara3);

    // location section
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location-container");
    const locationHeader = document.createElement("h2");
    const locationPara = document.createElement("p");
    locationHeader.textContent = "Location";
    locationPara.textContent = "489 Yorkshire Road, Minas Tirith, Gondor";
    locationDiv.append(locationHeader, locationPara);

    // append containers
    homeDiv.append(heroDiv, openingHoursDiv, locationDiv);
    container.appendChild(homeDiv);
}