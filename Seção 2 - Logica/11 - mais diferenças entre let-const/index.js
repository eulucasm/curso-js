/*
//let tem escopo de bloco {... bloco}
//var só tem escopo de função

const verdadeira = true;

let nome = 'lucas'; // criando a let
var nome2 = 'lucão'; // criando a var

if (verdadeira) {
    let nome = 'maria'; //criando a let
    var nome2 = 'Rodrigo'; // redeclarando a var

    if (verdadeira) {
        var nome2 = 'amancio'; //criando a let
        let nome = 'cabrito'; // redeclarando a var
    }
}

console.log(nome, nome2);
*/
//escopo de função

function falaOi() {
    var nome = 'Lucas'
    console.log(nome);
}

falaOi();