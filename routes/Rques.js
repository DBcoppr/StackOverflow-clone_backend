import express from "express"
import {Cquestion,getAllques} from "../controllers/Cquestion.js"
export const quesrouter=express.Router()

quesrouter.post("/Ask",Cquestion)
quesrouter.get("/get",getAllques)
