const express = require("express")
const cors = require("cors")
const formRoute = require("./Routes/formRouter")
const connect = require("./config/db")

const app = express()

// crete middlewers

app.use(express.json())
app.use(cors())

// form routes

app.use("/form",formRoute)


// conect db to server

app.listen(4500,async()=>{
    try{
        await connect
        console.log("connected to DB")
    }catch(err){
        console.log("not connected to db")
        console.log(err)
    }

    console.log('port 4500 running')
})