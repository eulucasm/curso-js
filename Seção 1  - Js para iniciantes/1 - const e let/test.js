const nome = 'Lucas';
const sobrenome = 'marques';
const idade = 31;
const peso = 95;
const altura = 1.84;
let imc;
let anoNascimento;
let nomeCompleto;

nomeCompleto = nome + ' ' + sobrenome;
imc = peso / (altura * altura);
anoNascimento = 2021 - idade;

console.log(nomeCompleto, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${altura} de altura, e seu imc é de ${imc}`);
console.log(nomeCompleto, 'nasceu em', anoNascimento);