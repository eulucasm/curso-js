const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    //modelando o bando de dados
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: false,
        default: ''
    },
    telefone: {
        type: String,
        require: false,
        default: ''
    },
    email: {
        type: String,
        require: false,
        default: ''
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);
    return user;
}

Contato.prototype.register = async function () {
    this.valida();

    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function () {
    this.cleanUp();
    //validação dos campos.
    // o email precisa ser valido.
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if (!this.body.nome) this.errors.push('Nome é um campo OBRIGATÓRIO');
    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado: E-mail ou Telefone.')
    }

}

Contato.prototype.cleanUp = function () {
    //verifica de tudo é string no body do form
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        telefone: this.body.telefone,
        email: this.body.email,
    };
}

module.exports = Contato;