function duplicateCount(string) {
    const charMap = {};

    // Mapeamos cada caractere da string ao nosso mapa.
    for (const char of string.toLowerCase()) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] = charMap[char] + 1;
        }
    }

    // Obtemos todos os valores do nosso mapa e os filtramos,
    // de modo a manter somente aqueles números maiores que 1.
    const repeatedValues = Object.values(charMap)
        .filter((count) => count > 1);

    return repeatedValues.length;
}

console.log(duplicateCount('aabbca1m')); // 2
console.log(duplicateCount('aABCbc33zzzzzqw')); // 5