//MAP -> 
//dobre os numeros do array
//indices        0   1  2   3  4  5  6  7  8  9   10  11  12  
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function (valor) {
//     return valor * 2;
// });
// console.log(numerosEmDobro);
//___________----------___________----------___________----------
//Para cada elemento:
//Retorne apenas uma String com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [{
        nome: 'Lucas',
        idade: 31
    }, //0
    {
        nome: 'Maria',
        idade: 20
    }, //1
    {
        nome: 'João',
        idade: 18
    }, //2
    {
        nome: 'Angela',
        idade: 04
    }, //3
    {
        nome: 'Eva',
        idade: 70
    }, //4
    {
        nome: 'Barbara',
        idade: 23
    }, //5
]

const apenasNomes = pessoas.map(obj => obj.nome);

const removeNome = pessoas.map(obj => ({
    idade: obj.idade
}));

const addId = pessoas.map(function (obj, indice) {
    const newObj = {
        ...obj
    };
    newObj.id = indice;
    return newObj;
});

console.log(apenasNomes);
console.log(removeNome);
console.log(addId);