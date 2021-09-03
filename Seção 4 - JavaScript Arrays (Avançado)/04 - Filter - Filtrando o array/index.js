//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos(por estar filtrando)
//requer um retorno true or false
//Retorne os numeros maiores de 10
//exemplo padrão
//indices        0   1  2   3  4  5  6  7  8  9   10  11  12  
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//function callbackFilter(valor) {
//    return (valor > 10); //aqui a função ja retorna true ou false. simples e pratica.
//}

//const numerosNovos = numeros.filter(callbackFilter);
//console.log(numerosNovos);

//ou, exemplo reduzido
//indices        0   1  2   3  4  5  6  7  8  9   10  11  12  
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosNovos = numeros.filter(function (valor) {
//     return valor > 10; //aqui a função ja retorna true ou false. simples e pratica.
// });

// console.log(numerosNovos);

//ou exemplo com arrow function
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosNovos = numeros.filter(valor => valor > 10); //aqui a função ja retorna true ou false. simples e pratica.
// console.log(numerosNovos);
//----------------------------------------------------------------------------------------------

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

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
        idade: 04
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
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComIdadeMaior = pessoas.filter(valor => valor.idade > 50);
const pessoasTerminamComA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasComNomeGrande);
console.log(pessoasComIdadeMaior);
console.log(pessoasTerminamComA);