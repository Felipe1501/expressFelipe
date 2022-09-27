const express = require('express');
const server = express();

server.get('/', function(req, res) {
    res.send('<h1>OBA!</h1>')
});

server.all('/teste', function(req, res) {
    res.send('<h1>OBA! TESTE</h1>')
});

server.get(/api/, function(req, res) {
    res.send('<h1>API!</h1>')
});

server.listen(1501, () => console.log('Servidor Rodando Homo Sapiens!!!'));