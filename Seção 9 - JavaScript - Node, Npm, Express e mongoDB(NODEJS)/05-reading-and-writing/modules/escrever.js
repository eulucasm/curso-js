const fs = require('fs').promises;

module.exports = (caminho, dados) => {

    fs.writeFile(caminho, dados, {
        flag: 'w',
        encoding: 'utf8'
    });

}

//aqui ele cria um arquivo com as informações, e se caso ja existe esse arquivo,
//ele o apaga e segue o fluxo de criação.
// fs.writeFile(caminho, dados, {
//     flag: 'w',
//     encoding: 'utf8'
// });


//aqui ele faz um appending no arquivo, adicionando itens a mais.
// fs.writeFile(caminhoArquivo, 'frase 1', {
//     flag: 'a',
//     encoding: 'utf8'
// });