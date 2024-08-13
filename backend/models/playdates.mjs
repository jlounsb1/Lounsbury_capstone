import mongoose from 'mongoose'


const playDateSchema = new mongoose.Schema({
    playDate:{type:String},
    dogOne: {type:String},
    dogTwo: {type:String},
})

export default mongoose.model('PlayDate', playDateSchema)