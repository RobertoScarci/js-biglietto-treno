
// Chiedo all'utente i km che dovrà percorrere 

const numberKm = parseInt(prompt('Type the distance you want to travel in Km'));

// chiedo all'utente l'età personale

const userAge = parseInt(prompt('Type your age'));

// faccio il primo calcolo sul risultato totale del prezzo del biglietto

let totalPrice = numberKm * 0.21;

// indico una seconda variabile che indica lo sconto che si andrà ad applicare

let priceSale;

// ricalcolo il costo del biglietto se l'utente sarà minorenne o over 65

if (age < 18) {
    priceSale = totalPrice * 20 / 100;
} else if (age > 65) {
    priceSale = totalPrice * 40 / 100;
}


document.getElementById('output').innerHTML = 'Il costode biglietto è ' + totalPrice.toFixed(2) + ' $'
