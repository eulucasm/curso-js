//Declaração Clássica
//Declaração de função(Function hoisting)
//hoisting = a engine do Js eleva as declarações de funções de variaveis pro topo
//do JS, isto é, você pode declarar uma função e chama-la no código independente da ordem
//que está, Exemplo:
//chamo a declaração primeiro.
falaOi();
//..codigo 
//..codigo
//..codigo
//declaro a função.
function falaOi() {
    console.log('Oie');
}

//as funções são first-class object (objetos de primeira classe)
//function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

//Arrow function
//declaração de função, só que mais curta
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};

funcaoArrow();

//Dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando...');
    }
}
obj.falar();