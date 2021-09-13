export const nome = 'Lucas'; //exportando a variavel diretamente
const sobrenome = 'Marques';
const idade = 31;

export function soma(x, y) { //exportando a função diretamente
    return x + y;
}

export class Pessoa { //exportando a classe diretamente
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {
    sobrenome,
    idade,
};