let counter = document.getElementById("counter");
let cookie = document.getElementById("cookie");
// ---------------------------------------
let homeMade = document.getElementById("btn-1");
let bake = document.getElementById("btn-2");
let factory = document.getElementById("btn-3");
// ---------------------------------------
/*Alttaki iki kod önemli, counter'ın innerText'ine 
yazılması için işlemi cookieCount üzerinden gerçekleştiriyor.*/
let cps = document.getElementById("cps");
let cookiePerSecond = Number(localStorage.getItem("cookiePerSecond"));
let cookieCount = Number(localStorage.getItem("cookieCount"));
counter.innerText = cookieCount;
cps.innerText = `${cookiePerSecond}/s`;
saveGame();

cookie.addEventListener("click", () => {
  cookieCount++;
  counter.innerText = cookieCount;
  saveGame();
});

homeMade.addEventListener("click", () => {
  if (cookieCount >= 100) {
    cookieCount -= 100;
    counter.innerText = cookieCount;
    cookiePerSecond += 1;
    cps.innerText = `${cookiePerSecond}/s`;
  } else {
    alert("You don't have enough cookies!");
  }
  saveGame();
});

bake.addEventListener("click", () => {
  if (cookieCount >= 500) {
    cookieCount -= 500;
    counter.innerText = cookieCount;
    cookiePerSecond += 5;
    cps.innerText = `${cookiePerSecond}/s`;
  } else {
    alert("You don't have enough cookies!");
  }
  saveGame();
});

factory.addEventListener("click", () => {
  if (cookieCount >= 5000) {
    cookieCount -= 5000;
    counter.innerText = cookieCount;
    cookiePerSecond += 50;
    cps.innerText = `${cookiePerSecond}/s`;
  } else {
    alert("You don't have enough cookies!");
  }
  saveGame();
});

setInterval(function () {
  cookieCount = cookieCount + cookiePerSecond;
  counter.innerText = cookieCount;
  saveGame();
}, 1000);

function saveGame() {
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cookiePerSecond", cookiePerSecond);
}
