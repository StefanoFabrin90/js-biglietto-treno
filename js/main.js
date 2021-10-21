
// biglietto del treno

// eta del passeggero
const age = parseInt (prompt ('Inserisci la tua eta') );
// console.log('age');

// km da voler percorrere
const km = parseInt ( prompt ('totale km da percorrere') );
// console.log('km');

// prezzo del biglietto
const price = km * 0.21;
// console.log(price);


// costo biglietto con eventuali sconti
let realPrice;

if ( (age > 18) && (age < 65) ) {
    realPrice = price.toFixed(2);
}  else if (age <= 18) {
    realPrice = price - (price * 20 / 100).toFixed(2);
}  else if (age >= 65) {
    realPrice = price - (price * 40 / 100).toFixed(2);
}
// console.log(realPrice);


// html 
document.getElementById ('risultato').innerHTML = `il costo del biglietton ammonta a euro ${realPrice}`
