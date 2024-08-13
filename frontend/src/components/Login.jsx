import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useRef } from 'react';


function Login(props) {

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={props.handleSubmit}>
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
            <button type="submit" name="true" onSubmit={(e) => props.setLoggedIn(Boolean(e.target.name))}>Login</button>
            </form>
        <Link to='/register'>Signup</Link>
        </div>
    )
}

export default Login