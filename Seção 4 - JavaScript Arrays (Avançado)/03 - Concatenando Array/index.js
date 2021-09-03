const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//metodo concat concatena dois ou mais arrays
const a3 = a1.concat(a2, [7, 8, 9], 'Lucão');

// ... rest -> ...spread (espelha o array)
const a4 = [...a1, 'Lucas', ...a2];


console.log(a3);
console.log(a4);