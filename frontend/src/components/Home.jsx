import React from 'react'





export default function Home (props) {
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    
  
    return(
        
        <div className='main'>
        {!userLocalStorage_parsed.username &&<h1> Welcome to Doggy Playdates</h1>}      
        
        {userLocalStorage_parsed.username && <h1>Welcome: {userLocalStorage_parsed.username}</h1>}
        <br />
        <p>This site allows you to sign up to interact with other dogs and set up play dates. To get started hit the signin/register button.</p>
        <br />
        <p>Once you have registered go ahead and sign in, then check out the dog list page to see a list of other users and their dogs. This is where you can see a button to set up a play time. Make sure to provide all the information the other user would need to have a successful playdate.</p>
        <br />
        <p> You should be able to see all of your play dates on the play dates tab.</p>
        
        </div>
    )
}