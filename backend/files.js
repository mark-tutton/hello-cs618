// import methods from fs library
import { writeFileSync } from 'node:fs'
import { readFileSync } from 'node:fs'

// create users array with one user entry
const users = [{ name: 'Adam Ondra', email: 'adam.ondra@climb.ing' }]

// convert to json
const usersJson = JSON.stringify(users)

// write to .json file
writeFileSync('backend/users.json', usersJson)

// read .json file
const readUsersJson = readFileSync('backend/users.json')

// parse json
const readUsers = JSON.parse(readUsersJson)

// write to console
console.log(readUsers)
