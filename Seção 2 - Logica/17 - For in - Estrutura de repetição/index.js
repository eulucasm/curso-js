const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marques',
    idade: 31
}
for (let chave in pessoa) {
    console.log(pessoa[chave]);
}

/*
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marques',
    idade: 31
}

console.log(pessoa.nome);
console.log(pessoa['nome']);
/*

/*
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marques',
    idade: 31
}
for (let i in pessoa) {
    console.log(i);
}
*/
/*
//for in le os indices ou chaves do objeto
const frutas = ['Manga', 'Uva', 'Laranja'];
//a variavel i pode ser chamada de qualquer nome que eu quiser
for (let i in frutas) {
    console.log(frutas[i]);
}
*/
/*
estrutura convencional
const frutas = [
    'pera',
    'maca',
    'uva'
];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/