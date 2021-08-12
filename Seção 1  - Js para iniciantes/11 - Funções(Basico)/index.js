/**
//arrow function
const raiz = (n) => {
    return n ** 0.5;
}
//ou
// const raiz = n => n ** 0.5;

console.log(raiz(16));
*/


/**
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(16));
*/



/**
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma();
console.log(resultado);
*/

/**
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(10, 20);
console.log(resultado);
//nota-se que a variavel resultado nao sofre erro pois esta encapsulada dentro da function soma
*/



/**
function saudacao(nome) {
    console.log(`Bom dia ${nome} !`);
    return 
}

const variavel = saudacao('lucas');
*/