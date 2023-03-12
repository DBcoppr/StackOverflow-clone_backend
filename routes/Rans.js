import express from "express"
import { updateans } from "../controllers/Canswer.js";
export const router=express.Router()

router.patch("/post/:id",updateans)