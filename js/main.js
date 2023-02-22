'use strict'

/* variabili utenti */
const km = Number(document.getElementById("km").value);
const eta = Number(document.getElementById("eta").value);

/* calcolo del prezzo del biglietto in base ai km */
let prezzoIntero = km * 0.21;

 /* applicazione degli sconti in base all'età del passeggero */
let prezzoFinale;
if (eta < 18) {  
    prezzoFinale = prezzoIntero * 0.8;
} else if (eta >= 65) { 
    prezzoFinale = prezzoIntero * 0.6;
} else {
    prezzoFinale = prezzoIntero;
}
/* visualizzazione del prezzo finale */
console.log("Il prezzo del biglietto è di " + prezzoFinale.toFixed(2) + " euro.");

const inputButton = document.getElementById('prezzo');

inputButton.addEventListener('click', 
    
    function() {
        document.querySelector('h1').innerHTML = `${prezzoFinale.toFixed(2)} €`
    }
)