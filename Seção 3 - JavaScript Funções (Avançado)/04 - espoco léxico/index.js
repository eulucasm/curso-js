//a função interna pode "olhar ao redor" e utilizar variaveis declaradas no codigo.
//no caso, a função interna salta pra fora procurando a variavel até chegar no escopo global
//caso não encontre a variavel, será retornado um erro.
const nome = 'Lucas';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();

//a função sempre lembra dos seus "vizinhos"