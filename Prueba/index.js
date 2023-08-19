const container = document.getElementById("container")

function card() {
    const cardc = document.createElement('div');
    cardc.classList.add("card")
    
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = 'Hola';

    const cardImg = document.createElement("img")
    cardImg.src = "https://img-16.stickers.cloud/packs/fe1ed939-39f5-42fa-b100-3df06c84ef03/webp/cb5e30d3-4d9a-477e-869f-ece31f2fded8.webp"
    cardImg.style.width = "100%"

    const cardContent = document.createElement("p");
    cardContent.textContent  = "CHOKOCRISPIS"


    cardc.appendChild(cardTitle);
    cardc.appendChild(cardImg)
    cardc.appendChild(cardContent);

    container.appendChild(cardc)
}

