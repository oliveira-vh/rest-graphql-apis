
const remove = (req, res) => {
    res.send({
        success: true,
        data: 'id ' + req.params.id
    })
}

const patch =  (req, res) => {
    //alterar products - somente algus campos
    console.log(req.body);
    res.send({
        success: true,
        data: req.body
    })
}

const put = (req, res) => {
    //alterar products
    console.log(req.body);
    res.send({
        success: true,
        data: req.body
    })
}

const post = (req, res) => {
    console.log(req.body);
    res.send({
        success: true,
        data: req.body
    })
}

const getProductById = (req, res) => {
    res.send({
        name: 'Product 1'
    })
}

const getAll = (req, res) => {
    res.send({
        products: [{name: 'TV'},{name: 'DVD'}]
    })
}

module.exports = {
    remove,
    patch,
    put,
    post,
    getProductById,
    getAll
}