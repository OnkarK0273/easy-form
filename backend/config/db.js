const monoose = require("mongoose")

// config dotenv file to access values fron .env
require("dotenv").config()

//connection to db

const connect = monoose.connect(process.env.MONGO_URL)

module.exports = connect