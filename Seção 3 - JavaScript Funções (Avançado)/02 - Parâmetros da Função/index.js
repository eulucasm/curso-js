function conta(operador, acumulador, ...numeros) { //... = rest operetor
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('*', 1, 20, 30, 40, 50);

/*
//desestruturação de array
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['lucas', 'marques', 31])
*/

/*
//via desestruturação de variaveis
function funcao({
    nome,
    sobrenome,
    idade
}) {
    console.log(nome, sobrenome, idade);
}
let obj = {
    nome: 'Lucas',
    sobrenome: 'marques',
    idade: 31
};
funcao(obj);
*/

/*
function funcao(a, b = 2, c = 2) { //podemos enviar valores padrão para nossa função,
    //caso não enviemos no final, ele adotara o valor informado.
    console.log(a + b + c);
}
funcao(2, undefined, 20); //assumindo o valor padrão para b
funcao(2, null, 20); //anulado o valor de b
*/

/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3, 4);//argumentos são os valor enviado para a função
*/


/*
//a funcão definida com a palavra function tem uma variavel especial
//que chama arguments, que sustenta todos os argumentos enviados.
//esse exemplo não funciona em arrow function
//function funcao( /*argumento a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5); //enviando um valor pra suprir um argumento referenciado acima
//exemplo apenas com a expressão function
*/