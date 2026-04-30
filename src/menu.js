export function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Menu Spesial Kami";

    const menuGrid = document.createElement("div");
    menuGrid.style.display = "grid";
    menuGrid.style.gap = "20px";

    const dishes = [
        { name: "Pasta Carbonara", price: "Rp 45.000", desc: "Pasta creamy dengan smoked beef dan keju parmesan." },
        { name: "Pizza Margherita", price: "Rp 65.000", desc: "Pizza tipis klasik dengan tomat segar dan mozzarella." },
        { name: "Tiramisu", price: "Rp 35.000", desc: "Pencuci mulut khas Italia dengan aroma kopi yang kuat." }
    ];

    dishes.forEach(dish => {
        const item = document.createElement("div");
        item.innerHTML = `<h3>${dish.name} - ${dish.price}</h3><p>${dish.desc}</p>`;
        menuGrid.appendChild(item);
    });

    content.appendChild(title);
    content.appendChild(menuGrid);
}