'use strict'

/* variabili utenti */
let nome = document.getElementById("nome").value;
let km = document.getElementById("km").value;
let eta = document.getElementById("eta").value;

/* calcolo del prezzo del biglietto in base ai km */
let prezzoIntero = km * 0.21;

 /* applicazione degli sconti in base all'età del passeggero */
let prezzoFinale;
if (eta === 'minorenni') {  
    prezzoFinale = prezzoIntero * 0.8;
} else if (eta === 'over65') { 
    prezzoFinale = prezzoIntero * 0.6;
} else {
    prezzoFinale = prezzoIntero;
}
/* visualizzazione del prezzo finale */
console.log("Il prezzo del biglietto è di " + prezzoFinale.toFixed(2) + " euro.");

const inputButton = document.getElementById('prezzo');

inputButton.addEventListener('click', 
    
    function() {
        document.getElementById("surprise").innerHTML = `${prezzoFinale.toFixed(2)} €`
        document.getElementById('nome_show').innerHTML = `${nome}`
        
    }
)