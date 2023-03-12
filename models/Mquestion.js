import mongoose from "mongoose";

const QuestionSchema=mongoose.Schema({
    title:{type:String,required:"Question must have title"},
    questionbody:{type:String,required:"Question must have body"},
    tags:{type:[String],required:"Question must have tags"},
    nanswers:{type:Number,default:0},
    upVotes:{type:[String],default:[]},
    downVotes:{type:[String],default:[]},
    userPosted:{type:String,required:"Question must have an author"},
    userId:{type:String},
    askedon:{type:Date,default:Date.now},
    answer:[{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn:{type:Date,default:Date.now}
    }]
})
export default mongoose.model("Question",QuestionSchema)