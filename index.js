const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.delete('/products/:id', (req, res) => {
    res.send({
        success: true,
        data: 'id ' + req.params.id
    })
})

app.patch('/products/:id', (req, res) => {
    //alterar products - somente algus campos
    console.log(req.body);
    res.send({
        success: true,
        data: req.body
    })
})

app.put('/products/:id', (req, res) => {
    //alterar products
    console.log(req.body);
    res.send({
        success: true,
        data: req.body
    })
})

app.post('/products/:id', (req, res) => {
    res.send({
        name: 'Product 1'
    })
})

app.post('/products', (req, res) => {
    console.log(req.body);
    res.send({
        success: true,
        data: req.body
    })
})

app.get('/products', (req, res) => {
    res.send({
        products: [{name: 'TV'},{name: 'DVD'}]
    })
})

app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possível ouvir na porta 3000')
    } else{
        console.log('Servidor rodando na porta 3000')
    }
})