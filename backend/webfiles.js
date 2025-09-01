// import createServer method from http library
import { createServer } from 'node:http'
// import readFileSync method from fs library
import { readFileSync } from 'node:fs'

// call createServer method and assign to the server var
const server = createServer((req, res) => {
  // send 200 status code (success code) to clients
  res.statusCode = 200

  // set header to json
  res.setHeader('Content-Type', 'application/json')

  // send the json users file
  res.end(readFileSync('backend/users.json'))
})

// run on localhost
const host = 'localhost'

// run on port 3000
const port = 3000

// start the server
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
