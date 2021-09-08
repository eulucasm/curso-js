function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
const p1 = new Produto('camiseta', 50);

//objeto literal.
const p2 = {
    nome: 'bermuda',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 40
    },
    outraConfig: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 35
    }
});
console.log(p3, )



/*
//new Object -> todas tem um prototype (Object.prototype)
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype -> acontecendo em baixo dos panos.
}
const objB = {
    chaveB: 'B'
    // __proto__: objA
}
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA)

//dessa forma conseguimos acessar os códigos de outros objetos.
*/