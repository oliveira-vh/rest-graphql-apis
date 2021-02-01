const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());

app.use(routes);

app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possível ouvir na porta 3000')
    } else{
        console.log('Servidor rodando na porta 3000')
    }
})