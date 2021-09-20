require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conectado ao DB')
        app.emit('Pronto');
    })
    .catch(err => console.log(err));
//Relacionado a sessão
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const routes = require('./routes')
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {
    middlewareGlobal,
    checkCsrfError,
    csrfMiddleware
} = require('./src/middlewares/middleware');


app.use(helmet());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.static(path.resolve(__dirname, 'public')));

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
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

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
});