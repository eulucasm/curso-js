// o bloco try significa "TENTE" executar determinada ação,
// e o bloco catch trata caso ocorra um erro no try
/* 
Exemplo:

try{
    console.log(variavelNaoExiste);
} catch(err){
    console.log('Essa variavel ainda não existe')
}
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    console.log('Não lancar o erro para o usuario');
}