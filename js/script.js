const scelta = parseInt(prompt('Scegliere pari o dispari (inserisci 0 per pari e 1 per dispari)'));
let numero = parseInt(prompt('Inserire un numero da 1 a 5'));

console.log(scelta);
console.log(numero);

//funzione per numero random
function numeroRandom(minNum, maxNum) {
    let acaso = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return acaso;
};

let computerNumber = numeroRandom (1, 5);
console.log(computerNumber);

let risultato = computerNumber + numero;
console.log(risultato)

risultato = risultato * 1;
if (risultato < 0) {
    risultato = -risultato;
} else if   (risultato > 1) {
    risultato = risultato - 2;
} 

if (risultato==0) {
    alert("Il numero è pari");
} else {
    alert("Il numero è dispari");
}








