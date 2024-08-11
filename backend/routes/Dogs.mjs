import express from 'express'
import User from '../models/users.mjs'
const router = express.Router()


router.get('/', async (req, res) => {
    let dogList = await User.find({});
        res.json(dogList)
    
})

router.get('/:id', async (req, res) =>{
    let dogList = await User.find({});
    let myDog = await User.findById(req.params.id);
    console.log(myDog)
    res.send(myDog);
})


export default router;