//Loja virtual
//Produto -> abstração
//nos dois quero a possibilidade de aumento de preço e desconto.
//camiseta = cor, caneca = material 

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
//Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'preta')
const caneca = new Caneca('pequena', 10, 'vidro')

console.log(produto);
console.log(camiseta);
console.log(caneca);