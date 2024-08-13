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
     //got info again, just had to run request again
     console.log(`all playdates:`, allPlayDates, `Your dog:`, yourDogAgain, `all dogs again`, allDogsAgain)

     const filteredPlayDates = allPlayDates.filter(function(playdate){return playdate.dogOne ==yourDogAgain._id})
     console.log(`filtered playdates`, filteredPlayDates)
    //I have all dogs, i have my dog, and i have all the playdates, now i just need to filter the playdates according to which dogOne id matches your dog
    return(
       <>
        {!userLocalStorage_parsed.username && <h3>To see a list of your dogs Playdates, please log in</h3>}
       {userLocalStorage_parsed.username && <h3>List of playdates for {userLocalStorage_parsed.username}'s dog</h3>}
        {filteredPlayDates.map((playDate, index) => (
            //this if statement will be if the dogOne of playdates == yourDog._id
            
                
            <div key={index} className='eachPlayDate'>
                <p>information: {playDate.playDate}</p>
                
            </div>
                
            
           
        ))}
       </>
    )
}