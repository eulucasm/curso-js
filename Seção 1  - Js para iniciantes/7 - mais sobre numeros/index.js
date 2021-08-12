// IEEE 754-2008

// let num1 = 0.7; //number
// let num2 = 0.1; //number
//se realizar a operação direta pedindo um cosolog, teremos um valor incossistente resultando em
// 0.799999999....
//por isso devemos seguir a seguinte forma:
// num1 += num2; //num1 = num1 + num2; 0.8
// num1 += num2; //0.9
// num1 += num2; //1.0
// num1 += num2; //1.1
// num1 += num2; //1.2
// num1 += num2; //1.3
// num1 += num2; //1.4
// num1 += num2; //1.5
// num1 += num2; //1.6
// num1 += num2; //1.7
// num1 += num2; //1.8
// num1 += num2; //1.9
// num1 += num2; //2.0



// num1 = parseFloat(num1.toFixed(2));
// console.log(num1);
// console.log(Number.isInteger

//ou podemos seguir a seguinte forma:
let num1 = 0.7; //number
let num2 = 0.1; //number

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
console.log(num1);
console.log(Number.isInteger(num1));



//console.log(num1.toString() + num2.toString()); // converte variais para string e concatenando.
/**
 * quando temos uma operação com + envolvendo um numero e uma string, acontece automaticamente
 * uma concatenação transformando o resultado da operação em string.
 */
//alterando minha variavel num1 para string
//num1 = num1.toString();

/** 
 * arredondamento de casas decimais
 * console.log(num1.toFixed(4));
 */

/**
 * retornando se o numero é inteiro ou decimal (true ou false)
 * console.log(Number.isInteger(num1));
 */

//descobrindo se nossa conta é valida ou NaN
// let temp = num1 * 'ola';
// console.log(Number.isNaN(temp));