const HomeModel = require('../models/HomeModel');

HomeModel.create({
        titulo: 'Um Titulo Qualquer de teste',
        descricao: 'Apenas uma descrição simplório'
    })
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
}