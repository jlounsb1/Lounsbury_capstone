import React from 'react'





export default function Home (props) {
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    
  
    return(
        <>  
        {!userLocalStorage_parsed.username &&<h3> Welcome to Doggy Playdates</h3>}      
        
        {userLocalStorage_parsed.username && <h3>Test to see if I can access local storage elsewhere {userLocalStorage_parsed.username}</h3>}
        </>
    )
}