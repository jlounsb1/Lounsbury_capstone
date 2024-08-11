import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav(props) {
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
                    <Link to='/register'> Login /Sign Up</Link>
                </li>
            </ul>
        </>
    )
}