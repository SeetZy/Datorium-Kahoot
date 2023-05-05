//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import express from 'express'
// ? https://www.npmjs.com/package/morgan
import morgan from 'morgan'
// ? https://www.npmjs.com/package/cors
import cors from 'cors'
// ? https://www.npmjs.com/package/body-parser
import bodyParser from 'body-parser'

import { router } from './router/router'
import { initializeDB } from './db/db'

// Initializes the database
initializeDB()

// Initializing the app
const app = express()

// Defines the port
const port = process.env.PORT || 5000

app.use(morgan('dev'))

// Allowing server access from other domains
app.use(
  cors({
    origin: '*',
  })
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Uses the router
app.use(router)

// Starts the application
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/quiz`)
})
