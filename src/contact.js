export function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Hubungi Kami";

    const infoCard = document.createElement("div");
    infoCard.innerHTML = `
        <p>📍 <strong>Alamat:</strong> Jl. Kuliner No. 123, Malinau, Kalimantan Utara</p>
        <p>📞 <strong>Telepon:</strong> (021) 555-0123</p>
        <p>✉️ <strong>Email:</strong> reservation@delizioso.com</p>
        <p>⏰ <strong>Jam Operasional:</strong> 10:00 - 22:00 (Setiap Hari)</p>
    `;

    content.appendChild(title);
    content.appendChild(infoCard);
}