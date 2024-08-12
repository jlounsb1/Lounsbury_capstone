import React from 'react'
import axios from 'axios'
import{useParams} from 'react-router-dom'


export default function OtherDog(props){

    const params =useParams();
    const IUD =params.id
//getting the whole list of other dogs
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