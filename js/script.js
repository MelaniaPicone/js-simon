// recupero degli id
const numList = document.getElementById ("numbers-list");
const countdownElement = document.getElementById("countdown");
const form = document.getElementById("answers-form");
const inputs = form.querySelectorAll("input");
const message = document.getElementById("message");
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');


const generateRandomNumbers = (min, max) => {
const randomNum = [];

// ciclo fino a c he l'array random non abbia lunghezza 5
while(randomNum.length<5){

const number = Math.floor(Math.random() * (max - min +1) ) + min;

if(randomNum.includes(number) === false) {
  randomNum.push(number);
} }

return randomNum; }

let time = 30;

const numbers = generateRandomNumbers(1,30);

// ciclo i numeri su schermo
for (let i = 0; i < numbers.length; i++) {
numList.innerHTML += `<li class= "list-item"> ${numbers[i]}</li>`;
}

// timer
countdownElement.innerText = time;

const countdown = setInterval(() => {
time --;
countdownElement.innerText= time;

if (time === 20) {
clearInterval(countdown);
form.classList.remove('d-none');
numList.classList.add('d-none');
instructions.innerText = 'Digita i numeri che ricordi e visualizza il risultato'

}
}, 1000);

// al clic del pulsante mi recupera i numeri che l'utente ha inserito e controlla quali sono presenti nell'array random

const confirm = () => {

// array numeri utente
const userNumbers = [];
const correctAnswers = [];

for (let i=0; i<inputs.length ; i++) {
  // bonus validazione
  const value = parseInt(inputs[i].value);

if (isNan(value) === false && value >= 1 && value <= 30 && userNumbers.includes(value) === false) {

userNumbers.push(value);

}
} 

if (userNumbers.length !== 5) {
  message.innerText = "Ci sono valori non validi o duplicati"
  return;
}

for(let i=0 ; i<userNumbers.length ; i ++) {

if (numbers.includes(userNumbers[i])) {
  correctAnswers.push(userNumbers[i]);
}

// messaggio
message.innerText = `Hai indovinato ${correctAnswers.lenght} (${correctAnswers})`;

}
}


button.addEventListener('click', (e) => {
  e.preventDefault();
  confirm();
} )


