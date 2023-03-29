/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

const numUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
const sceltaUtente = prompt('Scegli pari o dispari');
const numPc = getRandomNumber(1, 5);
const somma = numUtente + numPc;
const risultato = (somma % 2) ? 'DISPARI' : 'PARI';
const outputWinner = checkWiner(sceltaUtente, risultato)


console.log(outputWinner);

const messageStr = `
Hai giocato il ${numUtente} e hai scelto ${sceltaUtente} <br>
Il PC ha giocato il ${numPc}  <br>
${outputWinner}
`

document.getElementById('message').innerHTML = messageStr;


function checkWiner(strA, result){
  let outputStr;
  if(strA.toUpperCase() === result){
    outputStr = 'Vince l\'utente';
  }else{
    outputStr = 'Vince il PC';
  }


  return outputStr;
}


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}