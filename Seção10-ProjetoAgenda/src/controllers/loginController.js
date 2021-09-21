const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async function (req, res) {
    try {
        const login = new Login(req.body); //instância da Classe login
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }
        req.flash('success', 'Usuário criado com sucesso');
        req.session.save(function () {
            return res.redirect('/login/index');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};