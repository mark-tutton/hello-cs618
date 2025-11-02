import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { optionalAuth } from './middleware/jwt.js'

import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'
import { eventRoutes } from './routes/events.js'

import { typeDefs, resolvers } from './graphql/index.js'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

// Setup
const app = express()
app.use(cors()) // TODO: add urls
app.use(bodyParser.json())

apolloServer.start().then(() =>
  app.use(
    '/graphql',
    optionalAuth,
    expressMiddleware(apolloServer, {
      context: async ({ req }) => {
        return { auth: req.auth }
      },
    }),
  ),
)

// Routes
postsRoutes(app)
userRoutes(app)
eventRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
