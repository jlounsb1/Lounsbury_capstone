import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'
import React from 'react'
//This is where I want to create a playdate 

function CreatePlayDate(props) {
    const [yourDog, setYourDog]=useState('')
    const [otherDog, setOtherDog] =useState([])
    //get your dog
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


    //get other dog from req.params
    useEffect(() =>{
        axios.get(`http://localhost:3000/dogs`)
           .then((result) =>{
               for(let i=0; i<result.data.length;i++){
                   if(result.data[i]._id===IUD) {
                   let otherDogInfo = result.data[i]
                   setOtherDog(otherDogInfo)}
               };
           })
           .catch(err =>console.log(err))
       }, [])


     const params =useParams();
     const IUD =params.id

     //your info from local storage
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    console.log(`your dog:`, yourDog, `local storage: `, userLocalStorage_parsed, `other Dog`, otherDog)

    return (
        <>
        <div>
            <h1>Test</h1>
            <h3>You: {yourDog.username}</h3>
            <p>Your Dog: {yourDog.dogName}</p>
            <p>Your Dog age: {yourDog.age}</p>
        </div>
        <div>
            <h3>Playmate: {otherDog.dogName}</h3>
            <p>Playmate Age:{otherDog.age}</p>
            <p>Owner: {otherDog.username}</p>
        </div>
        <div>
            <form onSubmit={props.handlePlayDate}>
                <label htmlFor='dogOne'>You: {yourDog.username}</label>
                <input 
                type="text"
                
                name={props.dogOne}
                value={yourDog._id}
                onSubmit ={(e) => props.setDogOne(e.target.value)}
                />
                <label htmlFor='dogTwo'>Playmate: {otherDog.dogName}. Owner: {otherDog.username}</label>
                <input 
                type="text"
                
                name={props.dogTwo}
                value={otherDog._id}
                onSubmit ={(e) => props.setDogTwo(e.target.value)}
                />
                <label htmlFor='playDate'>Please write down time and place for Playdate:</label>
                <input 
                type="text" 
                name={props.playDate}
                onChange={(e) => props.setPlayDate(e.target.value)}
                />
                <button type="submit">Set up Play Date!</button>
            </form>
        </div>
        
        </>
    )
}


export default CreatePlayDate