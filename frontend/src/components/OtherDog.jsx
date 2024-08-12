import React from 'react'
import axios from 'axios'
import{useParams} from 'react-router-dom'


export default function OtherDog(props){

    const params =useParams();
    const IUD =params.id

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