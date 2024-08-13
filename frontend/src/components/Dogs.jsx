import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import{useParams} from 'react-router-dom'

//pulling the users information from local storage
const userInfo = localStorage.getItem("userLocalStorage")
let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))

export default function Dogs(props) {
   const [yourDog, setYourDog]=useState('')
   const [allDogs, setAllDogs]=useState([])
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
        axios.get(`http://localhost:3000/dogs`)
        .then((result) =>{
            let allDogs = result.data
            setAllDogs(allDogs)
        })
        .catch(err => console.log(err))
    }, [])

    const params =useParams();
    const IUD =params.id

    return (
        <div>
        {/* This was added last, something bricked last time I tried to do this. Putting in comment to mark my place in case removal nessisary */}
        {userLocalStorage_parsed &&
       <div className="yourInfo">
        <h1>User: {yourDog.username}</h1>
            <p>Your dog: {yourDog.dogName}</p>
            <p>Age: {yourDog.age}</p>
       </div>
        }
       <div className="otherDogs">
        <h1>Other Dogs To play with:</h1>
           {allDogs.map((dog, index) => (
            <div key={index} className='eachDog'>
                <p>Dog: {dog.dogName}</p>
                <p>Dog's Age :{dog.age}</p>
                <p>Owner's Contact: {dog.email}</p>
                <Link to={`/playdates/createplaydate/${dog._id}`}>Make A playdate</Link>
            </div>
           ))}
       </div>
        </div>
    )
}