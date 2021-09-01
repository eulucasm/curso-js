function checkPalindrome(str) {
    for (var i = 0; i < str.length / 2; i++)
        if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
console.log(checkPalindrome("never odd or even"));
console.log(checkPalindrome("reviver"));