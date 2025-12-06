export { createDOMElements };
import margheritaImg from './margherita.jpg';

function createDOMElements(container){
    // menu container
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");

    // pizzas
    const pizzaMenuDiv = document.createElement("div");
    pizzaMenuDiv.classList.add("pizza-menu-container");

    const pizza1Div = document.createElement("div");
    const pizza1ContentDiv = document.createElement("div");
    const pizza1Img = document.createElement("img");
    const pizza1Header = document.createElement("h3");
    const pizza1PricePara = document.createElement("p");
    const pizza1Para = document.createElement("p");
    pizza1Img.src = margheritaImg;
    pizza1Img.height = 180;
    pizza1Header.textContent = "Margherita";
    pizza1PricePara.textContent = "$15.00";
    pizza1Para.textContent = "San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil"

    pizza1ContentDiv.append(pizza1Header, pizza1PricePara, pizza1Para);
    pizza1Div.append(pizza1Img, pizza1ContentDiv);
    pizzaMenuDiv.append(pizza1Div);


    // append containers
    menuDiv.append(pizzaMenuDiv);
    container.appendChild(menuDiv);
}