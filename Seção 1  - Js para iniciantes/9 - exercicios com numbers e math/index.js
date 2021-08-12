const numero = Number(prompt('digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é  ${numero ** 0.5 }</p>`;
texto.innerHTML += `<p>${numero} é inteiro? : ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>é NaN? : ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.round(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;