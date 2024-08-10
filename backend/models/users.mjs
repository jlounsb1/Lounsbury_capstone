import mongoose from 'mongoose'

const dogSchema = new mongoose.Schema({
    dogName:{type:String},
    age:{type:Number},
})

const userSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    dog: dogSchema
})

export default mongoose.model('User', userSchema)