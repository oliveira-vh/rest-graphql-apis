const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const { ApolloServer, gql } = require('apollo-server-express');

//rest
app.use(bodyParser.json());
app.use(routes);

//graphql
const typeDefs = gql`
    type Query {
        getAllProducts: [Product]
    }
    type Product {
        id: String
        name: String
    }
    type Mutation{
        createProduct(input: ProductInput): Product
    }
    input ProductInput {
        id: String!
        name: String!
    }
`

const resolvers = {
    Query: {
        getAllProducts: () => [{id: '1', name: 'All products'}, {id:'2', name:'product 2'}]
    },
    Mutation: {
        createProduct: (context, { input }) => {
            const {id,name} = input
            console.log(id, name)
            return {
                id, name
            }
        }
    }
}

const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers
});
graphqlServer.applyMiddleware({ app })

app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possível ouvir na porta 3000')
    } else{
        console.log('Servidor rodando na porta 3000')
    }
}) 