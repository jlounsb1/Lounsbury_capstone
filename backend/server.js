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

await mongoose.connect(process.env.ATLAS_URI)
//connect to mongoose

//test to make sure server running
app.get('/', async (req, res)=> {
    let userList = await User.find({})
    res.send(userList)
})


//Generic error handling
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send("Ok now it seems we are lost, I'm afraid your pupper will have to play alone.", {error:err});
  });
  
//listen setup
app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
})