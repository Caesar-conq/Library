const params = new URLSearchParams(window.location.search);
const index = Number(params.get("index"));

const container = document.getElementById("detail-content");

const cards = JSON.parse(localStorage.getItem("cards")) || [];

console.log("CARDS:", cards);
console.log("Array mi?", Array.isArray(cards));

const card = cards[index];

console.log("FOUND:", card);

if (card) {
  container.innerText = card.text;
} else {
  container.innerHTML = `<h1 class="not-found">404</h1>
            <h2 class="details">Web Page is not found.</h2>`;
}

console.log("ALL CARDS:", cards);
cards.forEach((c) => console.log("CARD:", c, "ID:", c.id));

/*
*Burada id yerine index döndürerek her biri birbirinden özel olan değerleri,
card'ların elemanlarını tanımlamak için kullandık. Vue ve React'ta bu yapım ile router döndürmek
!ÖNEMLİ 
*/
