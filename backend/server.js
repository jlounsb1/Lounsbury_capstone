//imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import User from './models/users.mjs'

//app information
const PORT = 3000;
const app = express();

//data transfer middleware
app.use(express.json());
app.use(express.urlencoded())

//test to make sure server running
app.get('/', async (req, res)=> {
    let userList = await User.find({})
    res.send(userList)
})

await mongoose.connect(process.env.ATLAS_URI)
//connect to mongoose

app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
})