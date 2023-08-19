function tarjeta() {
    const card = document.createElement("div")
    card.classList.add("card")
    
    const cardtittle = document.createElement("h1")
    cardtittle.textContent = "hey";

    const cardcontent = document.createElement("p");
    cardcontent.textContent = "buenas noches";

    card.appendChild(cardtittle);
    card.appendChild(cardcontent);

    card.appendChild(card);
}
