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

app.post('/register', (req, res) => {
   let newUser = User.create(req.body)
    .then(newUser=>res.json(newUser))
    .catch(err => res.json(err))
})

//This was just a test to make sure I set up a proper Schema
// app.get('/create', async (req, res) =>{
//     let user = await User.create({
//         username:'merp',
//         password:'abc123', 
//         email:'asjkdf@fake.io',
//         dog: {
//             dogName:'MrWoof',
//             age:8
//         }  
//     })
//     res.send(user)
// })

//Generic error handling
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send("Ok now it seems we are lost, I'm afraid your pupper will have to play alone.", {error:err});
  });
  
//listen setup
app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
})