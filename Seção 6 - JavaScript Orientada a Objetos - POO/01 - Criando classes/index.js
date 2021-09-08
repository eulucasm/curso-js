//classe = função construtora

//montando com classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.nome = sobrenome;
    }

    falar() {
        console.log('Fala');
    }
}

const p1 = new Pessoa('Lucas', 'Marques');

//_________________________________________________________________________
//montando com função construtura
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.nome = sobrenome;
}
Pessoa2.prototype.falar = function () {
    console.log('Fala');
}
const p2 = new Pessoa('Maria', 'Marques');