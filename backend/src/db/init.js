import mongoose from 'mongoose'

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/blog'

  mongoose.connection.on('open', () => {
    console.info('Successfully connected to the DB: ', DATABASE_URL)
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
