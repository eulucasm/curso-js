require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose'); //quem modela a base de dados e garantir que os dados estão corretos para salvar
mongoose.connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conectado ao DB')
        app.emit('Pronto'); //emitiu um evento mostrando que o mongo conectou e iniciou a aplicação
    })
    .catch(err => console.log(err));

const session = require('express-session'); //identifica o navegador do cliente salvando o cookie para agilizar o processo.
const MongoStore = require('connect-mongo')(session); //fala que as sessões são salvas no baco de dados(para nao salvar em memoria)
const flash = require('connect-flash'); //mensagens alto destrutivas vc ler ela e ela some, perfeito para uso de feedback.
const routes = require('./routes'); //rotas da aplicação, tipo /home, /contato
const path = require('path'); // usado para trabalhar com caminhos
const helmet = require('helmet'); //recomendação do express para segurança
const csrf = require('csurf'); //token para formulários, protegendo nossa aplicação. 
const {
    middlewareGlobal,
    checkCsrfError,
    csrfMiddleware
} = require('./src/middlewares/middleware'); //middlewares, funções executadas nas rotas em cadeia.


app.use(helmet());

app.use(
    express.urlencoded({
        extended: true
    })
); //podemos postar formularios para dentro da aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); //para arquivos estáticos para acesso direto da aplicação, tipo imagens, css, javascript...

//Configuração de cookie
const sessionOptions = session({
    secret: 'daskndoasn902384012983SDAFS@#$@@!DASD#@#$@>:<>:<Ç<SFD#@23$@SFSDWGTWER',
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //Tempo do cookie = 7 dias
        httpOnly: true
    }
}); // configuração de sessão

app.use(sessionOptions);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src', 'views')); //arquivos renderizados na tela, geralmente são HTML
app.set('view engine', 'ejs'); //motor parar renderizar os html ejs
app.use(csrf());

//Nossos Próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('Pronto', () => {

    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('server on port 3000')
    });
}); //aplicação ligando (servidor)