require('dotenv').config()

const config = {
  apiKey: process.env.API_KEY,
  apiPost: process.env.API_POST
}

module.exports = {
  config
}