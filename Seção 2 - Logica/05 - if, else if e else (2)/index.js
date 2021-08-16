const numero = 30;

//se (numero >= 0 && numero <= 5 ) ocorrer, faça isso {código}
//se não faça isso {o código}
// os blocos if execução as ações na order programada, com isso, caso tenha uma função
//que quebre o programa, o programa ira parar a execução;

if (numero >= 0 && numero <= 5) {
    console.log('o numero está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero está entre 9 e 11');
} else {
    console.log('O numero não esta entra 0 e 11 ');
}