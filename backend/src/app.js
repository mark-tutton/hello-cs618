import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

import { handleSocket } from './socket.js'

import { userRoutes } from './routes/users.js'

// Setup
const app = express()
app.use(cors()) // TODO: add urls
app.use(bodyParser.json())

// Routes
userRoutes(app)

// create socket server
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})
handleSocket(io)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

//export { app }
export { server as app }
