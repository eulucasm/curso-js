/*
Operadores de comparação
> maior que
< menor que
<= menor ou igual
>= maior ou igual
== igualdade (valor) ******************** melhor nao usar pois ele nao funciona com strings
=== igualdade estrita
!= diferente (valor) ******************** melhor nao usar pois ele nao funciona com strings
!== diferente estrito
 */
/*
console.log(10 > 5); // true
//ou
const comp = 10 > 5;
console.log(comp); // true
*/
/**
const comp = 10 >= 11; // maior ou igual a
console.log(comp); // true
*/
/**
const comp = 10 < 11; // menor
console.log(comp);
*/
/**
const comp = 10 <= 11; // menor ou igual a
console.log(comp);
*/

const num1 = 10;
const num2 = '10';
const comp = num1 === num2;
console.log(comp);