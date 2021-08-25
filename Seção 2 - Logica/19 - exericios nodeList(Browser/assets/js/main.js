const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    //diferença no CSS e Js
    //background-color - backgroundColor(CamelCase)
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFFFF'
}