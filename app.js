import express from 'express'
import logger from 'morgan'
import apiRoutes from './routes/api/v1' 

const app = express() // setup express application
const HOST = 'localhost'
const PORT = process.env.PORT || 5000

// Log requests to the console
app.use(logger('[:date[iso]] :method :url :status - :response-time ms'))

// Parse incoming requests data (bodyParser now included in express)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/v1', apiRoutes)

// Start listening for server requests;
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
