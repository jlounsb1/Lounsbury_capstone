
import OtherDog from './OtherDog'
import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'

export default function Dogs(props) {
   
    //pulling the users information from local storage
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    

    //params in case I need them
    const params =useParams();
    const IUD =params.id

    //pulling the entire list of dogs from my database, then finding the one that matches the user in local storage
    axios.get(`http://localhost:3000/dogs`)
    .then((result) =>{
    for(let i=0; i<result.data.length;i++){
        if(result.data[i].username==userLocalStorage_parsed.username) {
            let yourInfo = result.data[i]
            console.log(`Your info: `, yourInfo)
            return yourInfo
        }
    };
    })
    .catch(err =>console.log(err))
    
   //I can get the data to console, but I can't get it to return, and therefor be able to be mapped
    return (
        <>
       <div className="matchingChart">
       <div className="yourInfo">
        {userLocalStorage_parsed.username && <>
        <h3>{userLocalStorage_parsed.username}'s dogs info:</h3>
            <p>This is where I want to list the users information</p>
            </>}
       </div>
        
       <div className="otherDog">
        {/* I want to send the users info down as props so they are not included in their own list, but I need to get them stored as a variable first */}
        <h3>Other Dogs To play with:</h3>
            <OtherDog />
            
       </div>
        </div>
        </>
    )
}