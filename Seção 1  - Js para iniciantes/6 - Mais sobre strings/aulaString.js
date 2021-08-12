//maneiras de utilizar strings em aspas
let umaString = "um string";
let outraString = 'outra string';
let terceiraString = "um 'string com aspas' duplas e simples";
let quartaString = "uma string \"escapando aspas \"";
//mostrando barra invertida
let dasdas = "uma \\string"; //aqui a primeira passa some e mantém a segunda

//string são indexadas
//                   0 1 2 3 4 5 6
let variavelTeste = "u m t e x t e"

console.log(variavelTeste[4]); //aqui sera exibido apenas o valor X da nossa variável.
console.log(variavelTeste.charAt(6)); //aqui sera exibido apenas o valor e da nossa variável.
console.log(variavelTeste.concat(' em um lindo dia')) //aqui sera concatenado a nossa variável com o texto passado como parâmetro.
console.log(variavelTeste + ' em um lindo dia.'); //concat tem a mesma função do +, concatenado variáveis.
console.log(`${variavelTeste} em um lindo dia.`); //concatenação com template string;

console.log(variavelTeste.indexOf('t')); //aqui sera retornado o índice do valor passado como parâmetro.no caso o valor é 4.
console.log(variavelTeste.indexOf('t', 5)); //aqui ele ira buscar a letra t a partir do índice 5.
console.log(variavelTeste.lastIndexOf('t')); //ele começa a busca do final para o começo.
console.log(variavelTeste.search(/t/)); //aqui ele busca a letra t no texto.
console.log(variavelTeste.replace('u', 'j')); // aqui temos a substitição de u por j.
console.log(variavelTeste.replace(/u/, 'j')); //funciona como a console.log acima.

let varXX = "O rato roeu a roupa do rei de roma.";

console.log(varXX.replace(/r/, '#')); //aqui temos a substituição do primeiro r por #. 
console.log(varXX.replace(/r/g, '#')); //aqui temos a substituição de todos os r por #.
console.log(varXX.length); //verifica o tamanho da string.
console.log(varXX.slice(2, 6)); //Fatia a string exibindo apenas o índice descrito. 2 inicio, 6 fim.
console.log(varXX.slice(-3)); //Fatia a string exibindo apenas o índice descrito, iniciando do final, contando 3 casas e exibindo.
console.log(varXX.slice(32)); //faz a mesma coisa que a console de cima, mas iniciando do começo.
console.log(varXX.slice(-5, -1)); //mesmo esquema de fatias para a string.
console.log(varXX.split(' ')); // separa as palavras em uma array.
console.log(varXX.split(' ', 4)); // separa as palavras em uma array mas deixando 4 palavras.
console.log(varXX.toLocaleUpperCase()); //transforma a string em maiúsculo.
console.log(varXX.toLocaleLowerCase()); //transforma a string em minúsculo.