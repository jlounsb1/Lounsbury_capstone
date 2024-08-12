//imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import User from './models/users.mjs'
import bodyParser from 'body-parser'
import cors from 'cors'
import Dogs from './routes/Dogs.mjs'
import PlayDates from './routes/PlayDates.mjs'

//app information
const PORT = 3000;
const app = express();

//data transfer middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors())

//routing middleware
app.use( '/Dogs', Dogs)
app.use('/Playdates', PlayDates)


await mongoose.connect(process.env.ATLAS_URI)
//connect to mongoose

//test to make sure server running
app.get('/', async (req, res)=> {
    let userList = await User.find({})
    res.send(userList)
})

app.post('/register', (req, res) => {
    console.log(User, req.body)
    if(req.body.username = User.username){
        res.json('Username taken')
    }
    User.create(req.body)
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    User.findOne({username:username})
        .then(user => {
            if(user) {
                if(user.password === password) {
                    res.json(user)
                }else {
                    res.json('password incorrect')
                }
            } else {
                res.json('User not found')
            }
        })    
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