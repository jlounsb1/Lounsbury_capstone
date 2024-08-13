import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useRef } from 'react';


function Login(props) {

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
            <label htmlFor="username"><strong>Username:</strong></label>
            <input
            type="text" 
            placeholder="username" 
            name={props.username} 
            onChange={(e) => props.setUserName(e.target.value)}
             /> <br />
            <label htmlFor="password"><strong>Password:</strong></label>
            <input
            type="text" 
            placeholder="password" 
            name={props.password} 
            onChange={(e) => props.setPassword(e.target.value)}
             />
            <button type="submit" name="true" onSubmit={(e) => props.setLoggedIn(Boolean(e.target.name))}>Login</button>
            </form>
        <Link to='/register'>Need to set up an account? Signup</Link>
        </div>
    )
}

export default Login