import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import{useParams} from 'react-router-dom'



export default function PlayDates(props) {
    const params =useParams();
    const IUD =params.id
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    let yourPlayDates = []

    const [yourDog, setYourDog]=useState('')
    const [allPlayDates, setallPlayDates]=useState([])
    useEffect(() =>{
      axios.get(`http://localhost:3000/dogs`)
         .then((result) =>{
             for(let i=0; i<result.data.length;i++){
                 if(result.data[i].username===userLocalStorage_parsed.username) {
                 let yourInfo = result.data[i]
                 setYourDog(yourInfo)}
             };
         })
         .catch(err =>console.log(err))
     }, [])
    
  
     useEffect(()=>{
         axios.get(`http://localhost:3000/playdates`)
         .then((result) =>{
             
             for (let i=0; i<result.data.length; i++){
                if(result.data[i].dogOne ==yourDog._id) {
                    yourPlayDates = yourPlayDates.push(i)
                }
                setallPlayDates(yourPlaydates)
             }
         })
         .catch(err => console.log(err))
     }, [])

     console.log(`all playdates:`, allPlayDates, `Your dog:`, yourDog)

    return(
       <>
        {!userLocalStorage_parsed.username && <h3>To see a list of your dogs Playdates, please log in</h3>}
       {userLocalStorage_parsed.username && <h3>List of playdates for {userLocalStorage_parsed.username}'s dog</h3>}
        {allPlayDates.map((playDate, index) => (
            //this if statement will be if the dogOne of playdates == yourDog._id
            
            <div key={index} className='eachPlayDate'>
                <p>Owner: {}</p>
                <p>Information Provided: {}</p>
            </div>
           
        ))}
       </>
    )
}