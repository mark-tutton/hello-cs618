// import createServer method from http library
import { createServer } from 'node:http'

// call createServer method and assign to the server var
const server = createServer((req, res) => {
  // send 200 status code (success code) to clients
  res.statusCode = 200

  // set header to text
  res.setHeader('Content-Type', 'text/plain')

  // send text result
  res.end('Hello HTTP World!')
})

// run on localhost
const host = 'localhost'

// run on port 3000
const port = 3000

// start the server
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
