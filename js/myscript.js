// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili globali
const numToMem = document.getElementById("memory");

// lista dei 5 numeri casuali
const genNum = createRandomArr (5, 1, 100);
numToMem.innerHTML = `I numeri da memorizzare sono: ${genNum}`;

// timer 30 secondi
const timer = document.getElementById("timer");
let seconds = 30;

// timing function
let clock = setInterval (
    function () {

        // scorrimento timer
        timer.innerHTML = `Timer: ${seconds}`;
        if (seconds != 0) {
            seconds--;
        }else { 
            // scomparsa numeri
            clearInterval(clock);
            numToMem.innerHTML = "";

            // inserimento numeri memorizzati
            for (let i = 0; i < 5; i++) {
                const numReq = parseInt(prompt("Inserisci i numeri visualizzati."));

                // numeri corretti
               if (genNum.includes(numReq)) {
                    const correctNum = document.getElementById("correct");
                    correctNum.innerHTML += numReq + " ";
                } else {
                    // numeri sbagliati
                    const wrongNum = document.getElementById("wrong");
                    wrongNum.innerHTML += numReq + " ";
                }
            }
        }
    }
    ,
    1000
)



// FUNZIONI
// creazione numeri random
function createRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creazione array di numeri
function createRandomArr (maxLenght, min, max) {

    let arrNum = [];

    while (arrNum.length < maxLenght) {
        const newRandomNum = createRandomNum (min, max);

        if (!arrNum.includes (newRandomNum)) {
            arrNum.push (newRandomNum);
        }     
    }

    return arrNum;
}