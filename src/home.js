export function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Bersihkan konten sebelumnya

    const headline = document.createElement("h1");
    headline.textContent = "Selamat Datang di Delizioso!";
    
    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600";
    image.alt = "Suasana Restoran";
    image.style.width = "100%";
    image.style.maxWidth = "600px";
    image.style.borderRadius = "12px";

    const description = document.createElement("p");
    description.textContent = "Kami menyajikan hidangan otentik dengan bahan-bahan segar pilihan. Rasakan pengalaman kuliner tak terlupakan di jantung kota.";
    
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
}