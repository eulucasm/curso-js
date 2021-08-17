//(condição) ?'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';
console.log(nivelUsuario);
//Ou
// if (pontuacaoUsuario >= 1000) {
//     console.log('VIP');
// } else {
//     console.log('Normal');
// }