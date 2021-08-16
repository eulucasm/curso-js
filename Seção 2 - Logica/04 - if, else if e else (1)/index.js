/*
entre 0 - 11 'bom dia'
entre 12 - 17 'boa tarde'
entre 18 - 23 'boa noite' 
*/
// If pode ser usado sozinho
// o else if não pode ser utilizado sozinho
//sempre que usar else, deve-se usar um if
//e pra chegar a condição, deve-se usar um else
const hora = 30;
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('olá, mas sua hora esta errada');
}