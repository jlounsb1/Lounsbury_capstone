import React from 'react'
import{useParams} from 'react-router-dom'

export default function Home (props) {
    const params =useParams();
    const IUD =params.id
    return(
        <>        
        <h2>Home component</h2>
        {IUD &&<h3>Hello {IUD}</h3>}
        </>
    )
}