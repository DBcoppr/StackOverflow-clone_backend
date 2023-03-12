import jwt from "jsonwebtoken"
import bp from "bcryptjs"
import modelinst from "../models/muser.js"

export const Signup =async(req,res)=>{
        
        const {name,email,password}=req.body
        
        try{
            const existingUser=await modelinst.findOne({email:email})
            
            if(existingUser){
                res.status(404).send({message:"user already exist"})
            }
            else{
                const hashedPassword=await bp.hash(password,5)
                const newUser=await modelinst.create({name:name,email:email,password:hashedPassword})                
                const token=jwt.sign({email:email,id:newUser._id},"test",{expiresIn:'1h'})

                res.status(200).send({result:newUser,token:token})
            }
           
        }
        catch(error){
            res.status(500).send("something went wrong...")
        }
}

export const Login =async(req,res)=>{
    const {email,password}=req.body
    try{
        
        const existingUser=await modelinst.findOne({email:email})
        const passwordcrt=await bp.compare(password,existingUser.password)
        if(!existingUser){
            res.status(404).send({message:"user doesnt exist"})
        }
        else{
            if(!passwordcrt){
                return res.status(404).send({msg:"wrong password"})
            }
            else{
                const token=jwt.sign({email:email,id:existingUser._id},"test",{expiresIn:'1h'})
                res.status(200).send({result:existingUser,token:token})
            }

        }
        
        
        
    
    }
    catch(error){
        res.status(500).send("something went wrong...")
    }
}