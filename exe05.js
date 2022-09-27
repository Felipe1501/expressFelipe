const express = require('express');
const server = express();
const router = require('./exe05_routes');

server.use('/api', router)

server.listen(1501, () => console.log('Servidor Rodando Homo Sapiens!!!'));