/** 
 * Aritméticos
 * + adição e concatenação
 * - subtração 
 * / divisão
 * * multiplicação
 * ** potência
 * % resto da divisão
 */

/** 
 *  ordem de precedência
 * (), **, *, /, %, +, -
 */

const num1 = 10;
const num2 = 3;

console.log(num1 - num2);

let contador = 1;
// operador de incremento ++
contador++; //2
contador++; //3
contador++; //4
console.log(contador);

// operador de decremento --
let contador2 = 10;
contador2--; //9
console.log(contador2);

//contador incremental
const passo = 50;
let contador3 = 0;
contador3 += passo; // contador = contador + 50;
console.log(contador3);

//podemos usar o passo a cima com qualquer operador matemático
const passo2 = 10;
let contador4 = 2;
contador4 *= passo2; // contador = contador * 10;
console.log(contador4);

// ou
const passo3 = 10;
let contador5 = 2;
contador5 **= passo3; // contador = contador ** 10;
console.log(contador5);

//convertendo uma string para numérico com parseInt()
const nume1 = 10;
const nume2 = parseInt('5');
console.log(nume1 + nume2);

//convertendo uma string para numérico com parseFloat()
const nume3 = 10;
const nume4 = parseFloat('5.2');
console.log(nume3 + nume4);