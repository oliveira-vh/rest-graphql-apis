const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const graphqlServer = require('./graphql');

//rest
app.use(bodyParser.json());
app.use(routes);

//graphql

graphqlServer.applyMiddleware({ app })

app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possível ouvir na porta 3000')
    } else{
        console.log('Servidor rodando na porta 3000')
    }
}) 