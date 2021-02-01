const getAllProducts = () => [{id: '1', name: 'All products'}, {id:'2', name:'product 2'}]
const createProduct = (context, { input }) => {
    const {id,name} = input
    console.log(id, name)
    return {
        id, name
    }
}
module.exports = {
    getAllProducts, 
    createProduct
}