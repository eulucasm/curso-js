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