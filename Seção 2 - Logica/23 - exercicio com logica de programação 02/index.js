//Escreva uma função chamada ePaisagem que recebe dois argumentos
//largura e altura de uma imagem (number).
//retorne true se a imagem estiver no modo paisagem.

//modo 4
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080))
console.log(ePaisagem(1080, 1920))

//modo 3
// const ePaisagem = (largura, altura) => {
//     return largura > altura;
// };

// console.log(ePaisagem(1920, 1080))
// console.log(ePaisagem(1080, 1920))


//modo 2
// function ePaisagem(largura, altura) {
//     return largura > altura;
// }
// console.log(ePaisagem(1920, 1080))
//console.log(ePaisagem(1080, 1920))

//MODO 1    
// function ePaisagem(largura, altura) {
//     return largura > altura ? true : false;
// }
// console.log(ePaisagem(1920, 1080))
// console.log(ePaisagem(1080, 1920))