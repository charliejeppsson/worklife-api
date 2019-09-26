import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import schema from './src/graphql/schema'
import resolvers from './src/graphql/resolvers'
import db from './src/models'
import dataLoaders from './src/loaders'
import { refreshTokens, verifyAccessToken } from './src/middleware/auth'
import apiRoutes from './src/routes/api/v1'

require('dotenv').config() // Env variables

// Initialize express app
const app = express()

const corsOptions = { origin: process.env.CLIENT_URL, credentials: true }
app.use(cors(corsOptions))
app.use(cookieParser())

// Log requests to the console
app.use(logger('[:date[iso]] :method :url :status - :response-time ms'))

// Separate authentication from graphql API
app.use('/api/v1', apiRoutes)

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers,
  context: async ({ req, res }) => {
    // Check access token validity before any query gets access to resolvers
    if (req.body.operationName !== 'login') {
      verifyAccessToken(req)
    }
    return {
      req,
      res,
      db,
      dataLoaders // For batching together association requests (avoid N+1)
    }
  }
})

// Integrate express app with apollo server middleware
server.applyMiddleware({
  app,
  cors: false // Disables built-in apollo cors to allow the cors middleware use
})

// Declare dev env host and port
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000

// Start listening for server requests;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
