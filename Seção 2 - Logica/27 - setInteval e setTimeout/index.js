function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);
//função utilizada para parar a função acima.
setTimeout(function () {
    clearInterval(timer);
}, 5000)



//ou
//esse exemplo executa a função ilimitadamente.
// setInterval(function () {
//     console.log(mostraHora());
// }, 1000);


//ou
// function funcaoIntervalo() {
//     console.log(mostraHora());
// }

// setInterval(funcaoIntervalo, 1000);