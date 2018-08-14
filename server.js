const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.port || 8080);

console.log('Server ok na porta 8080');