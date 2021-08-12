let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varX = varA;
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC);

/**
 * podemos resolver também com o operador de atribuição:
 * [varA, varB, varC] = [varB, varC, varA];
 */