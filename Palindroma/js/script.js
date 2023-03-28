/**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

/* Quello che sappiamo di una parola palindroma e che se letta in rntrambi i lati da sinistra verso destra e da destra verso sinistra risulterà sempre la stessa Es. otto, anna, radar, kayak.

1. Chiediamo all'utente attraverso un prompt di inserire la parola da controllare.

2. Salviamo la parola in un array ed attraverso il metodo split, dividiamo la parola in lettera per lettera.

3. attraverso il metodo reverse di un array andiamo a riposizionare gli elementi scomposti appunto al contrario.

4. attraverso il metodo join salviamo gli elementi capovolti in una nuova stringa all'interno dello stesso array.

5. creamo la condizione che controlli se la parola inserita all'inizio nel prompt corrisponda alla parola gestita nell'array quindi se il controllo soddisfa la condizione restituirà il messaggio che la parola in questione è palindroma, altrimenti no.

*/
let arrWord = [];

const wordIns = prompt('Inserisci una parola da verificare');
console.log(wordIns);

arrWord.push(wordIns);

console.log(arrWord);

const arrPalin = wordIns.split('');

console.log(arrPalin);

arrPalin.reverse('');

console.log(arrPalin);
