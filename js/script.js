// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var listaN = [];

// creo ciclo for per generare 5 alert che contengono un n randomico
for (var i = 0; i < 5; i++) {
    var n = Math.floor(Math.random() * 100) + 1; 
    alert(n);

    listaN.push(n);
    
}
console.log(listaN);

// utilizzo setTimeout per far passare 30 s

// creo ciclo for per generare 5 prompt

// stampo quanti e quali numeri sono stati ricordati