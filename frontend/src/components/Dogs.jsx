
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
    console.log(yourDog)
   //I can get the data to console, but I can't get it to return, and therefor be able to be mapped
    return (
        <>
       <div className="matchingChart">
       <div className="yourInfo">
        {userLocalStorage_parsed.username && <>
        <h3>Your's dogs info:</h3>
            <p>This is where I want to list the users information</p>
            </>}
       </div>
       <div className="otherDog">
        <h3>Other Dogs To play with:{yourDog.username}</h3>
       </div>
        </div>
        </>
    )
}