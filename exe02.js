const express = require('express');
const server = express();

server.get('/', function(req, res, next) {
    console.log('Início');
    next();
    console.log('Fim');
});

server.get('/', function(req, res) {
    console.log('Resposta');
    res.send('<h1>API!</h1>')
});

server.listen(1501, () => console.log('Servidor Rodando Homo Sapiens!!!'));