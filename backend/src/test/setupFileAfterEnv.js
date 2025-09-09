import mongoose from 'mongoose'
import { beforeAll, afterAll } from '@jest/globals'
import { initDatabase } from '../db/init.js'

beforeAll(async () => {
  // before test init db
  await initDatabase()
})

afterAll(async () => {
  // after all tests, disconnect from db
  await mongoose.disconnect()
})
