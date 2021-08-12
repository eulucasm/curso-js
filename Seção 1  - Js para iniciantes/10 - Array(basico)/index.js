//array aceita qualquer tipo de dados
//exemplo: const teste = [1, 'Lucas', true, {nome:'Cassio'}];
//arrey é uma estrutura de dados que permite a criação de listas e matrizes
// o array também é um dado indexado seguindo o seguinte padrão:
//                0        1        2

const alunos = ['Luis', 'Maria', 'João'];


// console.log(typeof alunos);//devolve o tipo da do array, que no caso é um objeto
// console.log(alunos instanceof Array);//mostra se é um array ou não

//alunos.push('José');
//alunos.push('Joaquim');
//fatiando o array
//console.log(alunos.slice(1, 5));

//apagar indice 1 do array
//delete alunos[1];

//remove do começo do array e armazena na variavel
//const removido = alunos.shift();

//remove do começo no array
//alunos.shift();

//const removido = alunos.pop(); //remove o ultimo elemento do array e salva na variavel removido.

//remover um elemento do array
//alunos.pop();//remove o ultimo elemento do array

//adicionando um elemento a frente do array
//alunos.unshift('Pedro');

//adicionando um elemento ao final do array
//alunos.push('Ana');
//console.log(alunos);

//descobrir o tamanho do array
//console.log(alunos.length);

//adicionando elementos ao array
// alunos[3] = 'José'; //observe que não temos o índice 3 no nosso array
// console.log(alunos);

//editando um elemento do array
//alunos[0] = 'Lucas';
//console.log(alunos);

//console.log(alunos[0]); // imprime o primeiro elemento do array = Luis
//console.log(alunos); // imprime todos os elementos do array