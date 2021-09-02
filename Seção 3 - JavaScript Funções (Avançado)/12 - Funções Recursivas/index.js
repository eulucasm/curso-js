//função que ela própria se chama de volta
//se preocupar em quando devemos parar de se chamar de volta

function recursiva(max) {
    if (max > 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);