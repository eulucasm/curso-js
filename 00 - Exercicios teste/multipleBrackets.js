function MultipleBrackets(str) {
    var squL = 0;
    var squR = 0;
    var curvL = 0;
    var curvR = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            curvL++;
        }
        if (str[i] === ")") {
            curvR++;
        }
        if (str[i] === "[") {
            squL++;
        }
        if (str[i] === "]") {
            squR++;
        }
    }
    if (curvL === 0 && curvR === 0 && squL === 0 && squR === 0) {
        return 1;
    } else if (curvL === curvR && squL === squR) {
        return 1 + " " + (curvL + squL);
    } else
        return 0;

}