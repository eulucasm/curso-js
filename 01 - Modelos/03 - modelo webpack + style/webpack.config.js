//para o nome, esse arquivo é um modulo para o node
const path = require('path'); //CommonJS

module.exports = {
    mode: 'development', //arquivos sem formatação, visando uma arquivo menor para desenvolvimento
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), //resolvendo o caminho das pastas.
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};