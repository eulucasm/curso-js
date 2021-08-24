const elementos = [{
        tag: 'p',
        texto: 'frase 1'
    }, //0
    {
        tag: 'div',
        texto: 'frase 2'
    }, //1
    {
        tag: 'footer',
        texto: 'frase 3'
    }, //2
    {
        tag: 'section',
        texto: 'frase 4'
    } //3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {
        tag,
        texto
    } = elementos[i];
    let criaTag = document.createElement(tag);
    let criaTexto = document.createTextNode(texto);

    criaTag.appendChild(criaTexto);
    div.appendChild(criaTag);
};

// const div = document.createElement('div');
// for (let i = 0; i < elementos.length; i++) {
//     let {
//         tag,
//         texto
//     } = elementos[i];
//     let criaTag = document.createElement(tag);
//     criaTag.innerText = texto;
//     div.appendChild(criaTag);
// };

// const div = document.createElement('div');
// for (let i = 0; i < elementos.length; i++) {
//     let {
//         tag,
//         texto
//     } = elementos[i];
//     let criaTag = document.createElement(tag);
//     criaTag.innerHTML = texto;
//     div.appendChild(criaTag);
// };

container.appendChild(div);