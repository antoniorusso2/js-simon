//GENERARE NUMERI DA 1 A 50;

//! ELEMENTI DOM

//*timer
const countdownDisplay = document.getElementById('countdown');
console.log(countdownDisplay);

//*btn
const btn = document.querySelector('.btn-primary');
console.log(btn);

//*lista numeri da inserire
const numbersList = document.getElementById('numbers-list');
console.log(numbersList);

//*form da mostrare per l'inserimento e la validazione dei numeri
const form = document.getElementById('answers-form');
console.log(form);

//array numeri da mostrare all'utente
const randomNumbers = [];

//ciclo while per pushare 5 numeri nell'array
while (randomNumbers.length < 5) {
  randomNumbers.push(randomIntOneToFifty());
}

//aggiunta numeri generati in pagina




//ciclo per creazione di 5 elementi che contengono i numeri da ricordare
for (i = 0; i < randomNumbers.length; i++) {
  const listItem = document.createElement('li');
  console.log(listItem);
  numbersList.append(listItem);
  listItem.innerText = randomNumbers[i];
  listItem.classList.add('list-group-item');
}




//FUNZIONE NUMERO DA 1 A 50
function randomIntOneToFifty() {
  let num = Math.round(Math.random() * 50);
  // console.log(num);
  return num;
}

// console.log(numbersToRemember);
// timer 30 secondi e poi i numeri scompaiono;
//appaiono 5 input in cui l'utente inserisce i numero che ha visto precedentemente
//il software risponde indicando quanti e quali numeri sono stati individuati correttamente
//* non e' importante l'ordine dei numeri basta che ne inserisca il piu possibile corretti

