import Mquestion from "../models/Mquestion.js"

export const Cquestion = async(req,res) =>{
    const quesdata=req.body
    console.log(quesdata)
    const postques=new Mquestion({...quesdata,userId:req.userId})
    try{
        await postques.save()
        res.status(200).send("posted question successfully")

    }
    catch{
        console.log(error)
        res.status(400).json("couldnt post new question")
    }
}
export const getAllques = async(req,res)=>{
    try{
        const allques=await Mquestion.find()
        res.status(200).send(allques)
    }
    catch(error){
        res.status(404).send({message:error.message})
    }
    
}