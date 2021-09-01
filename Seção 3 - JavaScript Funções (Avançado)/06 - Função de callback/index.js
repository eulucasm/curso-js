//funções de callback
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('F1');
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function () {
        console.log('F2');
        if (callback) callback();
    }, rand())
}

function f3(callback) {
    setTimeout(function () {
        console.log('F3');
        if (callback) callback();
    }, rand())
}

f1(function () {
    f2(function () {
        f3(function () {
            console.log('Olá Mundo!');
        });
    });
});