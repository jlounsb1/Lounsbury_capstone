import express from 'express'
import PlayDates from '../models/Playdates.mjs'
const router = express.Router()

router.get('/', async (req, res) => {
    let PlayList = await PlayDates.find({});
        res.json(PlayList)
    
})

router.post('/createPlayDate', (req, res) => {
    console.log(PlayDates, req.body)
    PlayDates.create(req.body)
    .then(PlayDates=>res.json(PlayDates))
    .catch(err => res.json(err))
})

export default router;