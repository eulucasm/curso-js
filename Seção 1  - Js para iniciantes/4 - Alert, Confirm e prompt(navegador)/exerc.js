let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

num1 = parseInt(num1);
num2 = parseInt(num2);

const resultado = num1 + num2;

alert(`o resultado é: ${resultado}`); //template strings

/**
 * Ou podemos utilizar a da seguinte forma:
 * alert(`o resultado é: ${num1 + num2}`);
 * assim eliminando a necessidade da declaração de uma const ou let;
 */