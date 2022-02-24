require('dotenv').config()

const config = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  server: process.env.SERVER_BASE, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB,
  options: {
      "enableArithAbort": true,
      "encrypt":false
  }
}

module.exports ={
  config
}