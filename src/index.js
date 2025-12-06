import { createDOMElements as createHome } from "./home";

const contentDiv = document.getElementById("content");

function removeAllChildren(domElement){
    while(domElement.firstChild){
        domElement.removeChild(domElement.firstChild);
    }
}

function openHome(){
    removeAllChildren(contentDiv);
    createHome(contentDiv);
}

openHome();