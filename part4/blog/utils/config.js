require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.Mongo

module.exports = {
  MONGODB_URI,
  PORT
}