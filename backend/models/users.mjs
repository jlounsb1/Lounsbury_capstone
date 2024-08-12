import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    dogName:{type:String},
    age:{type:Number}
})

export default mongoose.model('User', userSchema)