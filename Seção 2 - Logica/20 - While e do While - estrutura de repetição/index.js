//exemplo mais proximo ao real
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;
//let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('#########')
//do while executa o código primeiro e depois checa a condição
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

// Exemplos
// const nome = 'Lucas';
// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i])
//     i++
// }

// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// console.log('Segue a Vida ...');