import {useState} from 'react';
import axios from 'axios'
import cors from 'cors'

// Here is resource I used to help set this up:
// https://www.youtube.com/watch?v=ZVyIIyZJutM

function Signup() {
    const [username, setUserName] =useState()
    const [password, setPassword] =useState()
    const [email, setEmail] =useState()

    //I keep getting an error, console says its an axios error, and in network tab it says its a cors error
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/register', {username, email, password,} )
            .then(result => console.log(result.data))
            .catch(err=>console.log(err))
    }

    return(
        <div>
        <h2>Register</h2>
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
            <label htmlFor="email"><strong>Email:</strong></label>
            <input
            type="text" 
            placeholder="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
             />
        <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default Signup