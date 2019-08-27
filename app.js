import express from 'express'
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes'

const app = express() // setup express application
const HOST = 'localhost'
const PORT = process.env.PORT || 5000

// Log requests to the console
app.use(logger('dev'))

// Parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
routes(app)

// Start listening for server requests;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
