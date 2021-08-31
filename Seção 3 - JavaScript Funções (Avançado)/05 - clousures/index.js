//Global
//Habilidade da função de acessar o seu escopo léxico
//resumidamente, ela tem acesso ao próprio corpo da função e aos vizinhos.

function retornaFuncao() {
    const nome = 'Lucas';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);