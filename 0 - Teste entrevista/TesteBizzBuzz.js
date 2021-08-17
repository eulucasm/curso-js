for (let num = 1; num <= 100; num++) {

    if ((0 == num % 3) && (0 == num % 5)) {
        console.log("BingBong");

    } else if (0 == num % 5) {
        console.log("Bong");

    } else if (0 == num % 3) {
        console.log("Bing");
    } else {

        console.log(num);
    }
}