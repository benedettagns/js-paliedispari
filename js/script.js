const scelta = parseInt(prompt('Scegliere pari o dispari'));
const numero = parseInt(prompt('Inserire un numero da 1 a 5'));

//funzione per numero random
function numeroRandom(minNum, maxNum) {
    let acaso = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return acaso;
};

const button = document.getElementById('button');
const div = document.getElementById('randomico');

button.addEventListener('click', function () {
    let number = numeroRandom (1, 5);
    div.innerHTML = number;
});


