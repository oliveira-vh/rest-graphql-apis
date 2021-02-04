const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct } = require("./products");

const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation: {
        createProduct,
        deleteProduct,
        updateProduct,
        createImageOnProduct
    }
}
module.exports = resolvers;