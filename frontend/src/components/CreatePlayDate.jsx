import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'
import React from 'react'


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
    
    let dogOneValue = yourDog._id;
    let dogTwoValue = otherDog._id
    return (
        <div className='main'>
        <h1>Make A Playdate</h1>
        <div>
            <h3>User: {yourDog.username}</h3>
            <p>Dog: {yourDog.dogName}</p>
            <p>Dog's age: {yourDog.age}</p>
        </div>
        <div>
            <h3>Playmate: {otherDog.dogName}</h3>
            <p>Playmate Age:{otherDog.age}</p>
            <p>Owner: {otherDog.username}</p>
        </div>
        <div>
            <form onSubmit={props.handlePlayDate}>
                <label htmlFor='dogOne'><b>You:</b> {yourDog.username}. <b>Please copy this code to the input below: </b>{dogOneValue}</label>
                <input 
                type="text"
                
                name={props.dogOne}
                onChange ={(e) => props.setDogOne(e.target.value)}
                /> <br />
                <label htmlFor='dogTwo'><b>Playmate: </b>{otherDog.dogName} <b>Owner: </b>{otherDog.username} <b>Please copy this code to the input below: </b>{dogTwoValue}</label>
                <input 
                type="text"
                name={props.dogTwo}
               
                onChange ={(e) => props.setDogTwo(e.target.value)}
                /> <br />
                <label htmlFor='playDate'>Please write down time, place, and your information for playdate:</label><br />
                <input 
                type="textarea" 
                name={props.playDate}
                onChange={(e) => props.setPlayDate(e.target.value)}
                /> <br /><br />
                <button type="submit">Set up Play Date!</button>
            </form>
        </div>
        
        </div>
    )
}


export default CreatePlayDate