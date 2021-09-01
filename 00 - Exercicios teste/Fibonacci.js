function FibonacciChecker(num) {
    if (num === 2 || num === 3) {
        return "yes";
    }
    var num1 = 0;
    var num2 = 1;
    var num3 = 1;
    for (var i = 0; i <= num; i++) {
        if (num1 === num) {
            return "yes";
        }
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }
    return "no";

}