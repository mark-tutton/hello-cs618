import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'

// Setup
const app = express()
app.use(cors()) // TODO: add urls
app.use(bodyParser.json())

// Routes
postsRoutes(app)
userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
