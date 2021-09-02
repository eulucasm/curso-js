//IIFE -> immediately invoked function expression

(function () {
    console.log(132112312)
})();
//nesse caso, chamamos nossa função imediatamente após ser declarada
//ela é anónima usada para ser executada diretamente.
//exemplo

(function (idade, peso, altura) {
    const sobrenome = 'Marques';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);