import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { postsRoutes } from './routes/posts.js'

// Setup
const app = express()
app.use(cors()) // TODO: add urls
app.use(bodyParser.json())

// Routes
postsRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
