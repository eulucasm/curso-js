//Escreva uma função que receba dois numeros e retorne o maior deles.

//maneira 6
const max = (x, y) => x > y ? x : y;

console.log(max(10, 2));


//maneira 5
//const max = (x, y) => {
//     return x > y ? x : y;
// }
// console.log(max(10, 2));

//maneira 4
// function max(x, y) {
//     return x > y ? x : y;
// }
// console.log(max(10, 2));

//maneira 3
// function max(x, y) {
//     if (x > y) return x;
//     return y;
// }
// console.log(max(10, 2));

//maneira2
// function max(x, y) {
//     if (x > y) {
//         return x;
//     }
//     return y;
// }
// console.log(max(10, 2));

//maneira 1
// function max(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }

// console.log(max(10, 2));