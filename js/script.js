// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var n, inputUte;
var listaN = [], listaU = [];
var controllo = true;
var punti = 0;

// creo ciclo for per generare 5 n randomici
for (var i = 0; i < 5; i++) {
    n = Math.floor(Math.random() * 100) + 1;

    // controllo
    while (controllo) {

        if (!listaN.includes(n)) { // se n non si ripete pusha il numero nell'array
            listaN.push(n);
            controllo = false; // ed esci dal ciclo
        } else {
            n = Math.floor(Math.random() * 100) + 1; // altrimenti genera un nuovo n
        }

    }

    controllo = true;
}
alert("Simon dice: " + listaN);
console.log(listaN);


// utilizzo setTimeout per far passare 30 s
setTimeout(function () {

    // creo ciclo for per generare 5 prompt
    controllo = true;
    for (var i = 0; i < 5; i++) {

        inputUte = parseInt(prompt("inserisci il numero memorizzato"));

        // controllo
        while (controllo) {

            if (!listaU.includes(inputUte)) { // se non presente pushalo
                listaU.push(inputUte);
                controllo = false; // ed esci dal ciclo
            } else {
                alert("il numero e' gia stato inserito"); // altrimenti stampa alert e chiedi nuovamente 
                inputUte = parseInt(prompt("inserisci il numero memorizzato"));
            }

        }
        controllo = true;

        // controllo
        if (listaN.includes(inputUte)) {
            console.log("bravo! il numero " + inputUte + " e' presente"); // stampa se il numero dell'utente compare nel array
            punti++;
        } else {
            console.log("mi dispiace! il numero " + inputUte + " non e' presente"); // stampa che non e' presente
        }
    }
    console.log(listaU);

    // punteggio
    console.log("il tuo punteggio è: ", punti, "/", 5);

}, 3000);