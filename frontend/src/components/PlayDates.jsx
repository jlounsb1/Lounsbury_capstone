import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import{useParams} from 'react-router-dom'

export default function PlayDates(props) {
    const params =useParams();
    const IUD =params.id
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    const [allPlayDates, setallPlayDates]=useState([])
    const [yourDogAgain, setYourDogAgain]=useState('')
    const [allDogsAgain, setAllDogsAgain]=useState([])

    useEffect(() =>{
        axios.get(`http://localhost:3000/dogs`)
           .then((result) =>{
               for(let i=0; i<result.data.length;i++){
                   if(result.data[i].username===userLocalStorage_parsed.username) {
                   let yourInfo = result.data[i]
                   setYourDogAgain(yourInfo)}
               };
           })
           .catch(err =>console.log(err))
       }, [])

    useEffect(()=>{
        axios.get(`http://localhost:3000/playdates`)
        .then((result) =>{
            setallPlayDates(result.data)
            })
        .catch(err => console.log(err))
        }, [])

    useEffect(()=>{
        axios.get(`http://localhost:3000/dogs`)
        .then((result) =>{
            let allDogsAgain = result.data
            setAllDogsAgain(allDogsAgain)
            })
        .catch(err => console.log(err))
        }, [])

    //filtered list of playdates that match the current user.
     const filteredPlayDates = allPlayDates.filter(checkplaydate)
        function checkplaydate(playdate) {
            if(playdate.dogOne===yourDogAgain._id ||playdate.dogTwo ===yourDogAgain._id){
            return playdate
            }
        }
    return(
       <div className='main'>
        {!userLocalStorage_parsed.username && <h1>To see a list of your dogs Playdates, please log in</h1>}
       {userLocalStorage_parsed.username && <h1>Playdates for {userLocalStorage_parsed.username}'s puppers</h1>}
       <div className='playDates'>
        {filteredPlayDates.map((playDate, index) => (
            <div key={index} className='eachPlayDate'>
                <h3>Information:</h3>
                <p>{playDate.playDate}</p>
            </div>   
        ))}
        </div>
       </div>
    )
}