/**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

/* Quello che sappiamo di una parola palindroma e che se letta in rntrambi i lati da sinistra verso destra e da destra verso sinistra risulterà sempre la stessa Es. otto, anna, radar, kayak.

1. Chiediamo all'utente attraverso un prompt di inserire la parola da controllare.

2. Creo funzione per interrogare se parola inserita è palindroma

*/

const wordIns = prompt('Inserisci una parola').trim();
const wordReverse = turnWord(wordIns);


const risultato = (wordIns.toLowerCase() === wordReverse.toLowerCase()) ? 'La parola è palindroma' : 'La parola non è palindroma';

console.log(risultato);

function turnWord(word){
  let wordReverse = '';

  wordReverse = word.split('').reverse().join('');

  return wordReverse;
}