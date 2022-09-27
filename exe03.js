const express = require('express');
const server = express();

server.use('/api', function(req, res, next) {
    console.log('Início');
    next();
    console.log('Fim');
});

server.use('/api', function(req, res) {
    console.log('Resposta');
    res.send('<h1>API!</h1>')
});

server.listen(1501, () => console.log('Servidor Rodando Homo Sapiens!!!'));