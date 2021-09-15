const express = require('express');
const app = express();

// site/profiles/(id) -> url.params
// site/profiles/12345?campanha=googleads&nome_campanha=algo -> query.params(query string)

//recebe o objeto enviado no browser
app.use(
    express.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button>enviar!</button>
        </form>`
    );
});

//recebendo paramentros de url
app.get('/testes:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params); //partes que vem nas rotas da URL
    console.log(req.query); //quert string que vem naqueles esquemas de /sublink/?chave1=valor?...

    res.send('oi')
})

app.post('/', (req, res) => {
    console.log(req.body) //chaves de acordo com o que é enviado via post.
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('server on port 3000')
});