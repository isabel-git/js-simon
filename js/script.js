// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var inputUte;
var listaN = [], listaU = [];
var controllo = true;

// creo ciclo for per generare 5 alert che contengono un n randomico
for (var i = 0; i < 5; i++) {
    var n = Math.floor(Math.random() * 100) + 1;

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
    alert("Simon dice: " + n);
}
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
        } else {
            console.log("mi dispiace! il numero " + inputUte + " non e' presente"); // stampa che non e' presente
        }
    }
    console.log(listaU);


}, 3000);