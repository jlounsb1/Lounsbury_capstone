import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useRef } from 'react';
import {useParams} from 'react-router-dom'

function Login(props) {
    const params =useParams();
    const IUD =params.id
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    localStorage.clear();
    return(
        <div className='main'>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
            <label htmlFor="username"><strong>Username: </strong></label>
            <input
            type="text" 
            placeholder="username" 
            name={props.username} 
            onChange={(e) => props.setUserName(e.target.value)}
             /> <br />
            <label htmlFor="password"><strong>Password: </strong></label>
            <input
            type="text" 
            placeholder="password" 
            name={props.password} 
            onChange={(e) => props.setPassword(e.target.value)}
             /> <br />
            <button type="submit" name="true" onSubmit={(e) => props.setLoggedIn(Boolean(e.target.name))}>Login</button>
            </form>
        <Link to='/register' className='linkbtn'>Need to set up an account? Signup</Link>
        </div>
    )
}

export default Login