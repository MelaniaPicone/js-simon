// recupero degli id
const numList = document.getElementById ("numbers-list");
const countdown = document.getElementById("countdown");
const form = document.getElementById("answers-form");
const inputs = form.querySelectorAll("input");
const message = document.getElementById("message");


let randomNum = [];
let time = 30;

// ciclo i numeri casuali
for (let i = 0; i < 5; i++) {
  const ranNum = Math.floor(Math.random() * 50) + 1;
  randomNum.push(ranNum);
}

// ciclo i numeri su schermo
for (let i = 0; i < randomNum.length; i++) {
  const li = document.createElement("li");
  li.textContent = randomNum[i];
  numList.appendChild(li);
}


