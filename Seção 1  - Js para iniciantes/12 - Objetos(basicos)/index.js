// [] ARREY
// {} OBJETO

const pessoa1 = {
    nome: 'Fulano',
    idade: 30,
    sobrenome: 'de Tal',


    fala() {
        console.log(`${this.nome} ${this.sobrenome} Esta falando oi`);
    },
};

pessoa1.fala();


/**
//function factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('José', 'Silva', 25);
const pessoa2 = criaPessoa('Maria', 'Souza', 30);
const pessoa3 = criaPessoa('João', 'Souza', 35);
const pessoa4 = criaPessoa('Maria', 'Souza', 40);
const pessoa5 = criaPessoa('José', 'Silva', 25);

console.log(pessoa1, pessoa2);
*/



// const pessoa1 = {
//     nome: 'Lucas',
//     sobrenome: 'Santos',
//     idade: 25,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);
// console.log(pessoa1.sobrenome);