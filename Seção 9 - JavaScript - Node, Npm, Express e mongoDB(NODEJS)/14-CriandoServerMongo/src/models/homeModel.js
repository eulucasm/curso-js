const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    //modelando o bando de dados
    titulo: {
        type: String,
        require: true
    },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;