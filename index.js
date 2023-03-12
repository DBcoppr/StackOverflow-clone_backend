// const express=require("express")
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { userRoutes } from "./routes/users.js"
import { quesrouter } from "./routes/Rques.js"
import { router } from "./routes/Rans.js"

const app=express()
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use("/user",userRoutes)
app.use("/questions",quesrouter)
app.use("/answer",router)



app.get("/",(req,res)=>{
    res.send("this is a clone app")
})

const PORT=process.env.PORT || 5000
const CONNECTION_URL="mongodb+srv://admin:123tarikhan@cluster0.ybro9ey.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_URL).then((res)=>console.log("db connected")).catch((err)=>console.log("err in db connnect"))

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})

