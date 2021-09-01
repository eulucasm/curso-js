function longestWord(sen) {
    var str = sen.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function (str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("I love dogs"));