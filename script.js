const cardImages = [
  "/cards/2_of_clubs.svg",
  "/cards/2_of_diamonds.svg",
  "/cards/2_of_hearts.svg",
  "/cards/2_of_spades.svg",
  "/cards/3_of_clubs.svg",
  "/cards/3_of_diamonds.svg",
  "/cards/3_of_hearts.svg",
  "/cards/3_of_spades.svg",
  "/cards/4_of_clubs.svg",
  "/cards/4_of_diamonds.svg",
  "/cards/4_of_hearts.svg",
  "/cards/4_of_spades.svg",
  "/cards/5_of_clubs.svg",
  "/cards/5_of_diamonds.svg",
  "/cards/5_of_hearts.svg",
  "/cards/5_of_spades.svg",
  "/cards/6_of_clubs.svg",
  "/cards/6_of_diamonds.svg",
  "/cards/6_of_hearts.svg",
  "/cards/6_of_spades.svg",
  "/cards/7_of_clubs.svg",
  "/cards/7_of_diamonds.svg",
  "/cards/7_of_hearts.svg",
  "/cards/7_of_spades.svg",
  "/cards/8_of_clubs.svg",
  "/cards/8_of_diamonds.svg",
  "/cards/8_of_hearts.svg",
  "/cards/8_of_spades.svg",
  "/cards/9_of_clubs.svg",
  "/cards/9_of_diamonds.svg",
  "/cards/9_of_hearts.svg",
  "/cards/9_of_spades.svg",
  "/cards/10_of_clubs.svg",
  "/cards/10_of_diamonds.svg",
  "/cards/10_of_hearts.svg",
  "/cards/10_of_spades.svg",
  "/cards/jack_of_clubs.svg",
  "/cards/jack_of_diamonds.svg",
  "/cards/jack_of_hearts.svg",
  "/cards/jack_of_spades.svg",
  "/cards/king_of_clubs.svg",
  "/cards/king_of_diamonds.svg",
  "/cards/king_of_hearts.svg",
  "/cards/king_of_spades.svg",
  "/cards/queen_of_clubs.svg",
  "/cards/queen_of_diamonds.svg",
  "/cards/queen_of_hearts.svg",
  "/cards/queen_of_spades.svg",
  "/cards/ace_of_clubs.svg",
  "/cards/ace_of_diamonds.svg",
  "/cards/ace_of_hearts.svg",
  "/cards/ace_of_spades.svg",
];

function dealCards() {
  const tableauStack = document.querySelector(".tableau-stack");

  tableauStack.innerHTML = "";

  const randomCards = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * cardImages.length);
    randomCards.push(cardImages[randomIndex]);
  }

  randomCards.forEach((cardImage) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.backgroundImage = `url(${cardImage})`;
    tableauStack.appendChild(cardElement);
  });
}

const dealButton = document.getElementById("deal-button");
dealButton.addEventListener("click", dealCards);
