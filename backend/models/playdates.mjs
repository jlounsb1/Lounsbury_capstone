import mongoose from 'mongoose'


const playDateSchema = new mongoose.Schema({
    playDate:{type:Date},
    dogOne: mongoose.SchemaTypes.ObjectId,
    dogTwo: mongoose.SchemaTypes.ObjectId
})

export default mongoose.model('PlayDate', playDateSchema)