import "./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function init() {
    loadHome();
    setupNav();
}

// Tambahkan fungsi helper untuk membersihkan konten
function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

function setupNav() {
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("contact-btn");

    homeBtn.addEventListener("click", () => {
        clearContent();
        loadHome();
    });

    menuBtn.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    contactBtn.addEventListener("click", () => {
        clearContent();
        loadContact();
    });
}

init();