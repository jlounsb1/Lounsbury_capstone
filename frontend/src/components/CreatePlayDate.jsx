import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'
//This is where I want to create a playdate 

function CreatePlayDate(props) {
    const params =useParams();
    const IUD =params.id
    //I need to figure out how to get here from the map I am going to create, saving both the user info and the selected dog. probably through req params
    return (
        <>
        <h1>Test</h1>
        </>
    )
}


export default CreatePlayDate