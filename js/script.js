//primo esercizio - non sono riuscita a farlo 

//correzione fatta in classe 
/* function isPalindroma(word) {
    let reverse = '';
    for (let i = word.lenght - 1; i >= 0; i--){
        reverse += word[i]
    }

    if(reverse === word) {
        return true;
    } else {
        return false;
    }

    //alternativa
    if(reverse === word) {
        return true;
    }
    return false;
};
const parolaUtente = prompt('Inserisci una parola');

if (isPalindroma(parolaUtente)) {
    console.log('è palindroma');
} else {
    console.log('NON è palindroma');
}*/



//secondo esercizio 


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
document.getElementById('randomico').innerHTML = computerNumber;

let risultato = computerNumber + numero;
console.log(risultato);
document.getElementById('somma-numeri').innerHTML = risultato;

risultato = risultato * 1;
if (risultato < 0) {
    risultato = -risultato;
} while  (risultato > 1) {
    risultato = risultato - 2;
} 

if (risultato==0) {
    alert("Il numero è pari");
} else {
    alert("Il numero è dispari");
}








