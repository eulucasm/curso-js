// literal de uma string = ''
// array literal = []

//___________________________________________________________________
// const pessoa1 = new Object();
// pessoa1.nome = 'Lucas';
// pessoa1.sobrenome = 'Marques';
// pessoa1.idade = 31;

// pessoa1.falarNome = function () {
//     return (`${this.nome} bla bla bla`)
// };

// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa1.getDataNascimento());

// for (chave in pessoa1) {
//     console.log(chave);
//     console.log(pessoa1[chave]);
// }
//___________________________________________________________________

//Factory function / constructor functions / classes(sintaxe sugar)

// //Factory
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }
// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1.nomeCompleto)

//Constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //return this; implicitamente
}

const p1 = new Pessoa('Lucas', 'Marques');
console.log(p1);
//A palavra new funciona da seguinte forma:
//primeiramente ela cria um objeto vazio
//também vai pegar a palavra this(palavra chave) e atrelar ao objeto dentro da função
// {} <- this