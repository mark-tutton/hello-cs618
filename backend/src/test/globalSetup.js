import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '8.0.10',
    },
  })

  // create instance of in memory mongodb
  global.__MONGOINSTANCE = instance

  // provide url to instance
  process.env.DATABASE_URL = instance.getUri()
}
