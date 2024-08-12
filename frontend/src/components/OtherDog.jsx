import React from 'react'
import axios from 'axios'
import{useParams} from 'react-router-dom'


export default function OtherDog(props){
    const params =useParams();
    const IUD =params.id
    
return(
    <>
        <p></p>
        <p>This is where the map list of all dogs will appear</p>
    </>

)
}