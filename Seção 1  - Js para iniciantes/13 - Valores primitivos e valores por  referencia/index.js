/*
Primitivos(imutáveis) - string, number, boolean, undefined, 
null(bigint, symbol);
*/
/*
Referencia (mutável) - object, array, function - passados por referencia
*/

// let a = [1, 2, 3];
// let b = a;
// //para copiar exatamente o valor de A para dentro de b, usamos o seguinte parâmetro:
// // let b = [...a];
// console.log(a, b); // [1, 2, 3] [1, 2, 3]

// a.push(4); //a assume [1, 2, 3, 4], consequentemente b assume [1, 2, 3, 4]
// console.log(a, b); // [1, 2, 3, 4] [1, 2, 3, 4]

// b.pop(); //b assume [1, 2, 3], a assume [1, 2, 3]
// console.log(a, b); // [1, 2, 3] [1, 2, 3]

const pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
};
const b = {
    ...a
}; //mantém o valor original
a.nome = 'João'; //altera a para joão

console.log(b);