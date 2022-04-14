const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3001 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose.connect(process.env.MONGO_CONNECT, {}, (err) => {
    if(err){
        return console.error(err)
    }
    console.log("Connected to MongoDB")
})