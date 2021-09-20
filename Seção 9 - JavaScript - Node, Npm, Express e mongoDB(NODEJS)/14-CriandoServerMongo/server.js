require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://lucaspoletis:100190@cluster0.u0sew.mongodb.net/BASEDEDADOS?authSource=admin'

mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const routes = require('./routes')
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(meuMiddleware);
app.use(routes);
app.on('Pronto', () => {

    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('server on port 3000')
    });
})