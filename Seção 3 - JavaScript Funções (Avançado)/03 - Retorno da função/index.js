//return
//retorno da função
//termina a função

//exemplo real
//exemplo de closer
function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));


//o exemplo bizarro 
/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaFrase;
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
*/