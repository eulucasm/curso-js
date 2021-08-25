//usando o continue, ele encontra a condição imposta, pula, e continua a execução do laço
//ja o break, após encontrar a condição imposta, ele para a execução do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue;
    } //pula o numero 2 e continua o laço.
    if (numero === 4 || numero === 7) {
        console.log('pulei ops');
        continue; //pula o numero 4 e 7 e continua o laço.
    }
    if (numero === 8) {
        console.log('cansei')
        break;
    }
    console.log(numero);
}