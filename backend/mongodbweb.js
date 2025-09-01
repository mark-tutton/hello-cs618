// import createServer method from http library
import { createServer } from 'node:http'
// import mongodb
import { MongoClient } from 'mongodb'

// db url
const url = 'mongodb://localhost:27017'
// db name
const dbName = 'mydb'
// init new mongodb client
const client = new MongoClient(url)

// connect to the mongodb server
try {
  await client.connect()
  console.log('Successfuly connected to db')
} catch (err) {
  console.error('Error connecting to db: ', err)
}

// call createServer method and assign to the server var
const server = createServer(async (req, res) => {
  // fetch the db
  const db = client.db(dbName)

  // get the users collection
  const users = db.collection('users')
  // get list of documents from the users collection
  const usersList = await users.find().toArray()

  // send 200 status code (success code) to clients
  res.statusCode = 200

  // set header to json
  res.setHeader('Content-Type', 'application/json')

  // send the users list as JSON
  res.end(JSON.stringify(usersList))
})

// run on localhost
const host = 'localhost'

// run on port 3000
const port = 3000

// start the server
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
