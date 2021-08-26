//exemplo retorna hora

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:12:12');
    const hora = retornaHora();;
    console.log(hora);
} catch (e) {
    console.log('deu erro parça');
} finally {
    console.log('Tenha um Bom DiA');
}






/*
try{
    //é executada quando não há erros
}catch{
    //é executada quando a erros
} finally{
    //executado sempre
}
*/
/*
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch {
        console.log('deu erro dentro desse');
    } finally {
        console.log('Tbm sou finally')
    }

} catch (e) {
    console.log('tratando o erro');
} finally {
    console.log('Finally Eu sempre executado');
}
*/