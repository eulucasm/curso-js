/* 
Escreva uma função que recebe um numero e retorne o seguinte:
Números divisíveis por 3 Fizz;
Números divisíveis por 5 buzz;
Números divisíveis por 5 e 3 Fizzbuzz;
Número não divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um numero
Use a função com números de 0 a 100
*/
//maneira 2
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'fizzBuzz'
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}

/*
//Maneira 1
for (let num = 1; num <= 100; num++) {

    if ((0 == num % 3) && (0 == num % 5)) {
        console.log('FizzBuzz');
    } else if (0 == num % 5) {
        console.log('Buzz');
    } else if (0 == num % 3) {
        console.log('Fizz');
    } else {
        console.log(num);
    }
}
*/