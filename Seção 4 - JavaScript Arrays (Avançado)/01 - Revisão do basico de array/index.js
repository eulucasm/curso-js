const nome = 'Lucas Marques Marques2';
const nomes = nome.split(' '); //monta um array apartir dos espaços do nome
console.log(nomes);

const nome2 = ['Lucas', 'Marques', 'Marques2'];
const nomes2 = nome2.join(' ');
console.log(nomes2);



//Array são valores por referência
//indices         0          1       2        3       4 
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Nora', 'João']; //array literal
// const novo = nomes.slice(0, -2);

// console.log(novo);


//nomes.unshift('Nora'); //adiciona item ao inicio do array
//nomes.push('João'); //adiciona item no array
//novo.pop(); //remove elementos do array(final)
//novo.shift(); //remove elemento do array (inicio), e desloca os itens uma ou mais casas atrás
//console.log(nomes.length); //tamanho do array

//nomes[2] = 'Lucas'; //altera o indice 2
//delete nomes[1]; //delete o indice 1 do array

//array pouco utilizado, feito via construtor
//const nomes = new Array('Eduardo', 'Maria', 'Joana');