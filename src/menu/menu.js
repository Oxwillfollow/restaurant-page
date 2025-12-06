export { createDOMElements };
import margheritaImg from './margherita.jpg';
import prosciuttoImg from './prosciutto.jpg';
import quattroFormaggiImg from './quattroFormaggi.jpg';
import placeholderImg from './placeholder.jpg';

function createDOMElements(container){
    // menu container
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("top-container");

    // pizza container
    const pizzaMenuDiv = document.createElement("div");
    pizzaMenuDiv.classList.add("sub-container");

    // pizzas
    const pizzaMenuHeader = document.createElement("h2");
    pizzaMenuHeader.textContent = "Pizza Menu"

    const pizzaMargheritaDiv = createMenuItemDOMElement("Margherita", 15, margheritaImg, "San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil");
    const pizzaQuatroFormaggiDiv = createMenuItemDOMElement("Quattro Formaggi", 18, quattroFormaggiImg, "Mozzarella, gorgonzola, fontina, pecorino romano, black pepper");
    const pizzaProsciuttoDiv = createMenuItemDOMElement("Prosciutto e Rucola", 20, prosciuttoImg, "Tomato sauce, mozzarella, prosciutto di Parma, fresh arugula, shaved parmesan");
    const pizzaFunghiTartufoDiv = createMenuItemDOMElement("Funghi Tartufo", 22, placeholderImg, "Wild mushroom medley, truffle cream, fontina, arugula, shaved parmesan");
    pizzaMenuDiv.append(pizzaMenuHeader, pizzaMargheritaDiv, pizzaQuatroFormaggiDiv, pizzaProsciuttoDiv, pizzaFunghiTartufoDiv);

    // drinks container
    const drinksMenuDiv = document.createElement("div");
    drinksMenuDiv.classList.add("sub-container");

    // drinks
    const drinksMenuHeader = document.createElement("h2");
    drinksMenuHeader.textContent = "Drinks"

    const waterDiv = createMenuItemDOMElement("Water (0.5L)", 1, placeholderImg, "A bottle of water");
    const sodaDiv = createMenuItemDOMElement("Coca-Cola / Sprite / Fanta (0.5L)", 2.5, placeholderImg, "A bottle of soda");

    drinksMenuDiv.append(drinksMenuHeader, waterDiv, sodaDiv);

    // append containers
    menuDiv.append(pizzaMenuDiv, drinksMenuDiv);
    container.appendChild(menuDiv);
}

function createMenuItemDOMElement(name, price, image, description){
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");
    const menuItemContentDiv = document.createElement("div");
    menuItemContentDiv.classList.add("menu-item-content");
    const menuItemImg = document.createElement("img");
    const menuItemHeader = document.createElement("h3");
    const menuItemPricePara = document.createElement("p");
    const menuItemPara = document.createElement("p");

    menuItemImg.src = image;
    menuItemImg.height = 180; // fixed height for menu item images
    menuItemHeader.textContent = name;
    menuItemPricePara.textContent = `$${price.toFixed(2)}`;
    menuItemPara.textContent = description;

    menuItemContentDiv.append(menuItemHeader, menuItemPricePara, menuItemPara);
    menuItemDiv.append(menuItemImg, menuItemContentDiv);

    return menuItemDiv;
}