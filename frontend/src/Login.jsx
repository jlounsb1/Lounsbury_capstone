import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Login() {
    const [username, setUserName] =useState()
    const [password, setPassword] =useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:3000/login`, {username, password} )
            .then(result => {
                console.log(result)
                if(result.data === "Success") {
                    navigate('/home')
                }
            })
            .catch(err=>console.log(err))
    }

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
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login