export { createDOMElements };

function createDOMElements(container){
    // menu container
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");

    // append containers
    menuDiv.append();
    container.appendChild(menuDiv);
}