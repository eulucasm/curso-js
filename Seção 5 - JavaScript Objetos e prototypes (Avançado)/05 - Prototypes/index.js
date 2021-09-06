//construtora -> molde (classe) || Função
//A função construtora serve apenas de molde para a geração dos novos objetos.
/*
JavaScript é baseado em protótipos para passar propriedades e 
métodos de um objeto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servido de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um prototipo(__proto__)
que vem da propriedade prototype da função construtora que foi usada para 
criá-lo. Quando testamos acessar um membro de um objeto, primeiro o motor 
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tla membro.
*/


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.name + ' ' + this.sobrenome;
}

// pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function () {
    return this.name + ' ' + this.sobrenome;
}


//instância || Objetos da Função
const pessoa1 = new Pessoa('Lucas', 'O.'); //<- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(data);