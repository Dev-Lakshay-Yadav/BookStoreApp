import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
import path from "path"


const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 4000  
const URL = process.env.MongoDBURL

// Connect to mongodb
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to MongoDb")
} catch (error){
    console.log("Error : ",error)    
 }


//  Defining Routes
app.use("/book",bookRoute)
app.use("/user",userRoute)


// Deployment
const __dirname1 = path.resolve()
if(process.env.NODE_ENV === "production"){
    app.use(express.static("Frontend/dist"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"Frontend","dist","index.html"))
    })
}

 
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})