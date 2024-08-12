import React from 'react'
import axios from 'axios'
import{useParams} from 'react-router-dom'


export default function OtherDog(props){

    const params =useParams();
    const IUD =params.id
//getting the whole list of other dogs
axios.get(`http://localhost:3000/dogs`)
.then((result) =>{
    console.log(`data I want to map over in otherdog component use result.data just to see the array of dogs`, result);
 })
.catch(err =>console.log(err))

return(
    <>
    
    </>

)
}