//for clássico  -Geralmente com iteráveis(array ou string)
// for in retorna o índice ou chave(string, array ou objetos)
//for of retorna o valor em si (iteráveis, array ou strings)


//especifico para objetos iteráveis como sting ou array
//indice      123456......
const nomes = ['Lucas', 'Marques', 'Manoel'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log('########');

for (let i in nomes) {
    console.log(nomes[i]);
}
console.log('########');

for (let i of nomes) {
    console.log(i);
}

//bonus
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

// for (let valor of nome) {
//     console.log(valor);
// }


// for in
// for (let i in nome) {
//     console.log(nome[i]);
// }


// for normal
// for (let i = o; i < nome.length; i++) {
//     console.log(nome[i]);
// }