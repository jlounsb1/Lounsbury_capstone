import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'
//This is where I want to create a playdate 

function CreatePlayDate(props) {
    const params =useParams();
    const IUD =params.id

    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    //I need to figure out how to get here from the map I am going to create, saving both the user info and the selected dog. probably through req params
    return (
        <>
        <h1>Test</h1>
        <h3>You : {userLocalStorage_parsed.username}</h3>

        <h3>This will be the other dog: {IUD}</h3>
        <p>Right now it is just req.params</p>
        </>
    )
}


export default CreatePlayDate