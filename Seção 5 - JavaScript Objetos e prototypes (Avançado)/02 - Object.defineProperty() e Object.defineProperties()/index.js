//defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //valor da chave
        writable: false, //writable reference a possibilidade de alterar o valor
        configurable: false // possibilidade de apagar ou reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Mostra a chave
            value: nome, //valor da chave
            writable: false, //writable reference a possibilidade de alterar o valor
            configurable: false // possibilidade de apagar ou reconfigurar a chave
        },
        preco: {
            enumerable: true, //Mostra a chave
            value: preco, //valor da chave
            writable: false, //writable reference a possibilidade de alterar o valor
            configurable: false // possibilidade de apagar ou reconfigurar a chave
        },
    });

}

const p1 = new Produto('Bermuda', 34, 15);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}