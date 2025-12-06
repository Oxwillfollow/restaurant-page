import { createDOMElements as createHome } from "./home/home.js";
import { createDOMElements as createMenu } from "./menu/menu.js";
import './styles.css';

const cacheDOM = (function(){
    const contentDiv = document.getElementById("content");
    const homeBtn = document.querySelector(".home-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const aboutBtn = document.querySelector(".about-btn");

    return {
        contentDiv,
        homeBtn,
        menuBtn,
        aboutBtn,
    };
})();

function bindEvents(){
    cacheDOM.homeBtn.addEventListener("click", () => openHome());
    cacheDOM.menuBtn.addEventListener("click", () => openMenu());
    //cacheDOM.aboutBtn.addEventListener("click", () => openHome());
}

function removeAllChildren(domElement){
    while(domElement.firstChild){
        domElement.removeChild(domElement.firstChild);
    }
}

function openHome(){
    removeAllChildren(cacheDOM.contentDiv);
    createHome(cacheDOM.contentDiv);
}

function openMenu(){
    removeAllChildren(cacheDOM.contentDiv);
    createMenu(cacheDOM.contentDiv);
}

function init(){
    bindEvents();
    openHome();
}

init();
