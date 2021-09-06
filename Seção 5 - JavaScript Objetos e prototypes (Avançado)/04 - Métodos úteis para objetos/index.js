/* 
Object.values //Le apenas os valores
Object.entries // exibe arrays com os valores do objeto
Object.assign(des, any) // serve para copiar um objeto
Object.getOwnPropertyDescriptor(o, 'prop')// Retorna as propriedades dentro do objeto
...(spread)

ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {
    nome: 'Caneca',
    preco: 1.80,
    material: porcelana
};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}