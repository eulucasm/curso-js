//... = rest operator = juntar o resto 

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [, [, , seis]] = numeros;
console.log(seis);

// const numeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(numeros[1][2]); //= 6


//índice          0      1    2     3     4     5     6     7     8
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

//const [um, , tres, , cinco, , sete] = numeros
//console.log(um, tres, cinco);


// const [um, dois, tres, ...resto] = numeros; // ... = rest operator
// console.log(um, dois, tres);
// console.log(resto);