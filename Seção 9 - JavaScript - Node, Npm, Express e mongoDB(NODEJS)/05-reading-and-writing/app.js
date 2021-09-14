const path = require('path');
//pegando o caminho absoluto do arquivo, subindo um nivel até a raiz da pasta e criando o arquivo teste.txt
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome))
}
leArquivo(caminhoArquivo);


//aqui escreve o arquivo json
// const pessoas = [{
//         nome: 'Lucas'
//     },
//     {
//         nome: 'maria'
//     },
//     {
//         nome: 'joao'
//     },
//     {
//         nome: 'marcos'
//     },
//     {
//         nome: 'angela'
//     },
// ]
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)