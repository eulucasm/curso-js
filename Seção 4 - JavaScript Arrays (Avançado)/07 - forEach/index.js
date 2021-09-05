// Só está disponível dentro de array

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a1.forEach((valor, indice, array) => {
    console.log(valor, indice)
})

a1.forEach(valor => {
    valor += valor;
    console.log(valor);
});