import React from 'react'
import {Link} from 'react-router-dom';
import{useParams} from 'react-router-dom'

export default function Nav(props) {
    const params =useParams();
    const IUD =params.id
    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/playdates'>Play Dates</Link>
                </li>
                <li>
                    <Link to='/dogs'>Dog List</Link>
                </li>
                <li>
                    <Link to='/login'> Login /Sign Up</Link>
                </li>
            </ul>
        </>
    )
}