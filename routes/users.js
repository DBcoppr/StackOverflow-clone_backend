import express from "express"
import { Login,Signup } from "../controllers/auth.js"
export const userRoutes=express.Router()
userRoutes.post("/signup",Signup)
userRoutes.post("/login",Login)