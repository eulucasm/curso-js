const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marques',
    idade: 31,
    endereco: {
        rua: 'Jose Manuel de almeida',
        numero: 88,
        bairro: 'meu cantinho',
    }
};

//atribuição via desestruturação
const {
    endereco: {
        rua,
        bairro
    },
    endereco
} = pessoa;
console.log(rua, bairro, endereco);


// const {
//     nome: n = ''
// } = pessoa;
// console.log(n);

// console.log(pessoa);