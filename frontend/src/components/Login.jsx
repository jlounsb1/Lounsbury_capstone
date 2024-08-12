import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from 'axios'
import{useParams} from 'react-router-dom'

function Login() {
    const [username, setUserName] =useState()
    const [password, setPassword] =useState()
    const [loggedIn, setLoggedIn] =useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:3000/login`, {username, password, loggedIn} )
            .then(result => {
                console.log(result)
                if(result.data === "Success") {
                    
                    navigate(`/home/${username}`)
                }
                console.log(loggedIn)
            })
            .catch(err=>console.log(err))
    }

    const params =useParams();
    const IUD =params.id
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username"><strong>Username:</strong></label>
            <input
            type="text" 
            placeholder="username" 
            name="username" 
            onChange={(e) => setUserName(e.target.value)}
             />
            <label htmlFor="password"><strong>Password:</strong></label>
            <input
            type="text" 
            placeholder="password" 
            name="password" 
            onChange={(e) => setPassword(e.target.value)}
             />
            <button type="submit" name="true" onClick={(e) => setLoggedIn(Boolean(e.target.name))}>Login</button>
            </form>
        <Link to='/register'>Signup</Link>
        </div>
    )
}

export default Login