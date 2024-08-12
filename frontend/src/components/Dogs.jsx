
import OtherDog from './OtherDog'
import React from 'react'
import {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'

    //pulling the users information from local storage
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    console.log(userLocalStorage_parsed)

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
    const params =useParams();
    const IUD =params.id
    

    useEffect(()=>{
        axios.get(`http://localhost:3000/dogs`)
        .then((result) =>{
            let allDogs = result.data
            setAllDogs(allDogs)
        })
        .catch(err => console.log(err))
    }, [])

    

   //I can get the data to console, but I can't get it to return, and therefor be able to be mapped
    return (
        <>
       <div className="matchingChart">
       <div className="yourInfo">
        {yourDog.username && <>
        <h3>{yourDog.username}'s dogs info:</h3>
            <p>Name: {yourDog.dogName}</p>
            <p>Age: {yourDog.age}</p>
            <p>This is where I want to list the users information</p>
            </>}
       </div>
       <div className="otherDog">
        <h3>Other Dogs To play with:</h3>
        <p>This is where I want to map all the dogs</p>
           {allDogs.map((dog, index) => (
            <div key={index} className='eachDog'>
                {/* I need to clean up my data before this actually shows up, if there is an instance without a field it will give an error */}
                <p>Owner's Contact: {dog.email}</p>
                <p>Dog: {dog.dogName}</p>
                <p>Dog's Age :{dog.age}</p>
                <Link to={`/playdates/createplaydate/${dog._id}`}>Make A playdate</Link>
            </div>
           ))}
        
       </div>
        </div>
        </>
    )
}