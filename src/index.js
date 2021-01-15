const { ApolloServer, gql } = require('apollo-server');

//Toda request é POST
//Toda request bate no mesmo endpoint (/grahpql)

//Query => Obter informações (GET)
//Mutation => Manipular dados (/POST/PUT/PATCH/DELETE)
//Scalar types => String, int, Boolean, Float e ID.

const typeDefs = gql`
  type Query {
    hello: String
  }
`
const resolvers = {
  Query: {
    hello: () => "hello world"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));
