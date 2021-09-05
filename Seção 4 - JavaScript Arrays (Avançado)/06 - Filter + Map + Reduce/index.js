// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// ->Reduzir (somar Tudo)
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);