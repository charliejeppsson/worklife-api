import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import cors from 'cors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import schema from './graphql/schema'
import resolvers from './graphql/resolvers'
import db from './models'

require('dotenv').config() // Env variables

// Initialize express app
const app = express()

// Log requests to the console
app.use(logger('[:date[iso]] :method :url :status - :response-time ms'))

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers,
  context: async ({ req }) => {
    // Checks for user id in cookies and adds userId to each request
    const { token } = req.cookies
    if (token) {
      const { userId } = jwt.verify(token, process.env.AUTH_SECRET)
      req.userId = userId
    }

    let user
    if (!req.userId) {
      user = {}
      // throw new AuthenticationError('You must be logged in!')
    } else {
      user = await db.User.findByPk(req.userId)
    }

    return { ...req, db, user }
  }
})

var corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true // <-- REQUIRED backend setting
};

app.use(cors(corsOptions))
app.use(cookieParser())

// Integrate express app with apollo server middleware
server.applyMiddleware({
  app,
  path: '/',
  cors: false // Disables built-in apollo cors to allow the cors middleware use
})

// Declare dev env host and port
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000

// Start listening for server requests;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
