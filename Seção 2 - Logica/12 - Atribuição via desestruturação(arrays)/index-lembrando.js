//desestruturação
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);