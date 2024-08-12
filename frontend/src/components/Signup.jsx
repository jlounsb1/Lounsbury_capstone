import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'
import React from 'react'

// Here is resource I used to help set this up:
// https://www.youtube.com/watch?v=ZVyIIyZJutM

function Signup(props) {
    const params =useParams();
    const IUD =params.id
    return(
        <div>
        <h2>Register</h2>
        <form onSubmit={props.handleRegister}>
            <label htmlFor="username"><strong>Username:</strong></label>
            <input
            type="text" 
            placeholder="username" 
            name={props.username} 
            onChange={(e) => props.setUserName(e.target.value)}
             />
            <label htmlFor="password"><strong>Password:</strong></label>
            <input
            type="text" 
            placeholder="password" 
            name={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
             />
            <label htmlFor="email"><strong>Email:</strong></label>
            <input
            type="text" 
            placeholder="email" 
            name={props.email} 
            onChange={(e) => props.setEmail(e.target.value)}
             />
             <label htmlFor="dogName"><strong>Dog Name:</strong></label>
            <input
            type="text" 
            placeholder="Dog Name" 
            name={props.dogName}
            onChange={(e) => props.setDogName(e.target.value)}
             />
             <label htmlFor="age"><strong>Dog's Age:</strong></label>
            <input
            type="Number" 
            placeholder="age" 
            name={props.age} 
            onChange={(e) => props.setAge(e.target.value)}
             />

        <button type="submit">Register</button>
        </form>
        <Link to='/login'>Already Have an account? Sign In.</Link>
        </div>
    )
}

export default Signup