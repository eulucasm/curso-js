//função construtora -> objetos
//função fabrica -> objetos
//Na função construtora, precisamos mudar a convenção com é escrito as funções
//precisamos sempre iniciar o nome com letra maiúscula( NA FUNÇÃO CONSTRUTORA)
//factory -> criaPessoal (camelCase)
//constructor -> Pessoa (new) -> variavel = new Pessoa
//essas funções são como moldes para gerar novos objetos
//exemplo:
//como a função abaixo é uma construtora, o corpo da função ja é o objeto criado
//não podemos esquecer de utilizar a palavra "new"
//A palavra cria um novo objeto vazio, faz o this apontar para o objeto que esta sendo apontado
//e retorna esse objeto para a variavel.
function Pessoa(nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;

    //metodo é uma função dentro do objeto
    this.metodo = () => {
        console.log(this.nome + ': sou um metodo')
    };
}

const p1 = new Pessoa('Lucas', 'Marques');
const p2 = new Pessoa('Matheus', 'Marques');
p1.metodo();
console.log(p1.nome);