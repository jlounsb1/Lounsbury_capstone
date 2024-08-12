import React from 'react'
import{useParams} from 'react-router-dom'

const userInfo = localStorage.getItem("userLocalStorage")
let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
console.log(userLocalStorage_parsed)


export default function Home (props) {

    const params =useParams();
    const IUD =params.id
    return(
        <>        
        {IUD &&<h3>Hello {IUD}</h3>}
        {!IUD &&
            <h3> Welcome to Doggy Playdates</h3>
        }
        <h3>Test to see if I can access local storage elsewhere {userLocalStorage_parsed.username}</h3>
        </>
    )
}