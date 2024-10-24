//GENERARE NUMERI DA 1 A 50;

//! ELEMENTI DOM

//*timer
const countdownDisplay = document.getElementById('countdown');
// console.log(countdownDisplay);

//*lista numeri da inserire fino allo scadere del tempo
const numbersList = document.getElementById('numbers-list');
// console.log(numbersList);

const instructions = document.getElementById('instructions');

//*form da mostrare per l'inserimento e la validazione dei numeri
const form = document.getElementById('answers-form');
console.log(form);

const inputNum = document.querySelectorAll('input.answer');
console.log(inputNum);

//*btn
const btn = document.querySelector('.btn-primary');
// console.log(btn);

//! FINE ELEMENTI DOM -------------------------------------------------!

//array numeri da mostrare all'utente
let randomNumbers = [];
console.log(randomNumbers);
// console.log([...randomNumbers]);

// ciclo for per pushare 5 numeri nell'array
for (let i = 0; i < 5; i++) {
  let randomInt = randomIntOneToFifty();
  randomNumbers.push(randomInt);
}

//*aggiunta numeri generati in pagina
//ciclo per creazione di 5 elementi che contengono i numeri da ricordare
for (let i = 0; i < randomNumbers.length; i++) {
  const listItem = document.createElement('li');
  console.log(listItem);
  numbersList.append(listItem);
  listItem.innerText = randomNumbers[i];
  listItem.classList.add('list-group-item');
}

//*timer
let timer = 3;

// Aggiorna il timer ogni secondo e allo scadere scompaiono i numeri
const countdown = setInterval(() => {
  countdownDisplay.innerText = timer;  // Mostra il tempo rimanente nella console
  timer--;

  // Se il tempo è finito ferma il timer e mostra un messaggio
  if (timer < 0) {
    clearInterval(countdown);
    numbersList.classList.add('d-none');//lista numeri da memorizzare che diventa display none allo scadere del tempo
    form.classList.remove('d-none');
    instructions.innerText = 'Inserisci i numeri che hai memorizzato (l\'ordine non è importante)';
  }
}, 1000);

// let arrayElement;
// for (i = 0; i < arrayElement.length; i++) {

// }

//confronto input con numeri mostrati al timer
//per ogni ogni numero inserito confrontare l'uguaglianza con gli elementi dell'array

//recupero valori input



form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nodeListValues = [];


  for (i = 0; i < inputNum.length; i++) { //inputNum è la lista dio nodi contenente tutti i campi numbers

    let element = parseInt(inputNum[i].value);
    // console.log(element.value);
    nodeListValues.push(element);
    console.log(ifIncludes(randomNumbers, element));

    // if (compareNum(element, randomNumbers[i]) === true) {
    //   console.log('numero giusto');
    // };
  }

  console.log(nodeListValues);
  // inputValues(inputNum);
});



//FUNZIONE NUMERO DA 1 A 50
function randomIntOneToFifty() {
  let num = Math.floor(Math.random() * 50) + 1;
  // console.log(num);
  return num;
}

//funzione per confrontare i numeri inseriti dall'utente con quelli generati all'inizio
function ifIncludes(array, num) {
  if (array.includes(num)) {
    return true;
  }

  return false;
}


// console.log(numbersToRemember);
// timer 30 secondi e poi i numeri scompaiono;
//appaiono 5 input in cui l'utente inserisce i numero che ha visto precedentemente
//il software risponde indicando quanti e quali numeri sono stati individuati correttamente
//* non e' importante l'ordine dei numeri basta che ne inserisca il piu possibile corretti
