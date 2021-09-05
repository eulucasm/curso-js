//Reduce
//proposta -> Some todos os numeros(Reduce)
//               0  1   2   3  4  5  6  7  8  9   10  11  12
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor; //ou acumulador = acumulador + valor;
//     return acumulador;
// }, );
// console.log(total);


//Retorne a pessoa mais velha
const pessoas = [{
        nome: 'Lucas',
        idade: 31
    }, //0
    {
        nome: 'Maria',
        idade: 20
    }, //1
    {
        nome: 'João',
        idade: 18
    }, //2
    {
        nome: 'Angela',
        idade: 14
    }, //3
    {
        nome: 'Eva',
        idade: 70
    }, //4
    {
        nome: 'Barbara',
        idade: 23
    }, //5
]

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;

});
console.log(maisVelha);