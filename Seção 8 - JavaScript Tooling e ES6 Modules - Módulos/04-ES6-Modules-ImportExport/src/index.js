import {
    Pessoa,
    idade,
    nome,
    sobrenome,
    soma
} from './modulo1'

const p1 = new Pessoa('Lucão', 'Marques');

console.log(p1)
console.log(nome, sobrenome, idade);
console.log(soma(5, 5));