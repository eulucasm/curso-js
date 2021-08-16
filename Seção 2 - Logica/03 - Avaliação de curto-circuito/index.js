/*
&& => false && true - False "O valor mesmo"

|| ->

FALSY
*false - literal
0
"" ou '' ou ``
null / undefined
NaN

qualquer valor diferente dos acima, avalia-se como true.
*/
/*
//exemplo de execução com and ( && )
function falaOi() {
    return 'Oi';
}

const executor = 'Lucas';

console.log(executor && falaOi());
*/
/*
// exemplo de execução com or ( || )
console.log(0 || false || null || 'Lucas' || true);
//ele retorna o primeiro valor verdadeiro na expressão

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
*/
//pegadinha
const a = 0;
const b = null;
const c = 'false'; // string - ele esta entre '', e é avaliado como true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);