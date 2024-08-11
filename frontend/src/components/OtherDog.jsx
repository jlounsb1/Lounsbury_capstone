import React from 'react'
import axios from 'axios'

export default function OtherDog(){

axios.get(`http://localhost:3000/dogs`)
.then((result) =>{
    console.log(result);
 })
.catch(err =>console.log(err))

return(
    <>
    
    </>

)
}