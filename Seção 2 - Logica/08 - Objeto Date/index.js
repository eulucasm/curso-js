//link para leitura
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
exemplo de data marco zero
const tresHoras = 60 * 60 * 3 * 1000; // add 3 horas ao marco 0
const umDia = 60 * 60 * 24 * 1000; // add 1 dia
const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
*/

/*
//a = ano // m = mes // d = dia // h = hora // mm = minuto //s =  segundo
//                    a     m   d  h   mm   s 
const data = new Date(2019, 3, 20, 15, 14, 27);
console.log(data.toString());
*/

/*
// console.log(Date.now()); traz a data atual, em MS, a partir da data marco zero
const data = new Date('2021-07-17 17:52')
console.log('Dia', data.getDate()); // Pega o dia
console.log('mes', data.getMonth() + 1); // Pega o mes, o +1 serve para 
//informar o mes real pois em JS, o mes começa em 0
console.log('ano', data.getFullYear()); // Pega o anp
console.log('hora', data.getHours()); // Pega a hora
console.log('minuto', data.getMinutes()); // Pega o minuto
console.log('segundo', data.getSeconds()); // Pega o segundo
console.log('MileSegundos', data.getMilliseconds()); // Pega o milésimo 
console.log('Dia da semana', data.getDay()); // Pega o dia da semana, 0 = Domingo, 6 - sábado
console.log(data.toString());
*/
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formatarData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);