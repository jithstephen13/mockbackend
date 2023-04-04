require("dotenv").config()
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const { connection } = require("./configs/db")
const { Allroutes } = require("./routes/routes")


const app=express()


app.use(express.json())
app.use(cors())

app.use("/",Allroutes)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`Server is running at port ${process.env.PORT}`); 
    } catch (error) {

        console.log("Cannot able to start the server", "Error: ",error);

        
    }

})
