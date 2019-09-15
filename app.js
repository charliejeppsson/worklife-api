import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import db from './models';

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
})

// Initialize express app
const app = express()

// Integrate express app with apollo server middleware
server.applyMiddleware({ app })

// Declare dev env host and port
const HOST = 'localhost'
const PORT = process.env.PORT || 5000

// Start listening for server requests;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
