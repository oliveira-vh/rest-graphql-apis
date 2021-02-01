const { getAll } = require("../../controllers/productsController");
const { createProduct } = require("./products");

const { getAllProducts } = require('./products')
const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation: {
        createProduct
    }
}
module.exports = resolvers;