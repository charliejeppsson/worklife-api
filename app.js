import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';
// import logger from 'morgan'

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

// Log requests to the console
// app.use(logger('[:date[iso]] :method :url :status - :response-time ms'))

// Parse incoming requests data (bodyParser now included in express)
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// Start listening for server requests;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
