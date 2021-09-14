//aula básica sobre tratativa de rotas

const express = require('express');
const app = express();

//        CRIAR    LER    ATUALIZAR  APAGAR
//CRUD -> CREATE,  READ,  UPDATE,    DELETE
//        POST     GET    PUT        DELETE  

//o express trata as rotas.
//http://meusite.com/ <- GET -> Entregue a pagina /
//http://meusite.com/sobre  <- GET -> Entregue a pagina /sobre
//http://meusite.com/contato  <- GET -> Entregue a pagina /contato

app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button>enviar!</button>
        </form>`
    );
});

app.post('/', (req, res) => {
    res.send('Recebi o form');
})

app.get('/contato', (req, res) => {
    res.send('Vlw por entrar')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('server on port 3000')
});

//executando o servidor -> node server.js
//npx nodemon server.js -> fica assistindo o arquivo server.js da aplicação
//após a configuração do package.json, basta digitar npm start