import Mquestion from "../models/Mquestion.js";

export const updateans = async (req,res)=>{
    const {id} = req.params;

    const {nanswer,answerBody,userAnswered}=req.body
    const x=req.body.nanswer+1
    console.log(x)
    updatenanswer(id,x)
    try{
        const updateques= await Mquestion.findByIdAndUpdate(id,{$addToSet:{'answer':[{answerBody,userAnswered,userId:req.userId}]}})
        req.status.send(updateques)
    }
    catch(error){
res.status(400).send(error)
    }
}

const updatenanswer=async(id,x)=>{
    try{
        await Mquestion.findByIdAndUpdate(id,{nanswer:x})
        res.status(200).send("no of ans updated")
    }
    catch(error){
        console.log("answre in update ans")
    }
}