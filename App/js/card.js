const docForm = document.getElementById("doc-form");
const textInput = document.getElementById("textarea");
const cardContainer = document.getElementById("card-container");

let allCards = getCards();
updateCardsToCardCont();

docForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addCards();
});

function addCards() {
  const cardText = textInput.value.trim();

  if (cardText.length > 0) {
    const cardObject = {
      text: cardText,
      createdAt: new Date().toLocaleDateString(),
    };
    allCards.push(cardObject);
    saveCards();
    updateCardsToCardCont();
    textInput.value = "";
  }
}

function createCardItem(card, cardIndex) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  cardDiv.innerHTML = `<div class="card-content">
            <button class="dlt-btn">
              <i class="bx bx-x"></i>
            </button>
            <span class="card-text"
              >${card.text}</span
            >
          </div>
          <button class="read-more">Read More</button>`;
  let dltBtn = cardDiv.querySelector(".dlt-btn");
  dltBtn.addEventListener("click", () => {
    allCards.splice(cardIndex, 1);
    saveCards();
    updateCardsToCardCont();
  });

  const readBtn = cardDiv.querySelector(".read-more");
  readBtn.addEventListener("click", () => {
    window.location.href = `detail.html?index=${cardIndex}`;
  });
  return cardDiv;
}

function updateCardsToCardCont() {
  cardContainer.innerHTML = "";
  allCards.forEach((card, cardIndex) => {
    const cardItem = createCardItem(card, cardIndex);
    cardContainer.append(cardItem);
  });
}

function saveCards() {
  localStorage.setItem("cards", JSON.stringify(allCards));
}
function getCards() {
  const cards = localStorage.getItem("cards") || "[]";
  return JSON.parse(cards);
}
