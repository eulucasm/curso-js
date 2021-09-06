//Getters e Setters
// Fazer um metodo simular que é uma propriedade(basicamente)
//uma maneira de proteger minha propriedade


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        // value: estoque, //valor da chave
        // writable: false, //writable reference a possibilidade de alterar o valor
        configurable: false, // possibilidade de apagar ou reconfigurar a chave
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;
        }
    });


};

const p1 = new Produto('Bermuda', 34, 15);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque); //executando o Getter