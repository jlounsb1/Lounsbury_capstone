import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'

export default function PlayDates() {
    const params =useParams();
    const IUD =params.id
    const userInfo = localStorage.getItem("userLocalStorage")
    let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
    return(
       <>
       {userLocalStorage_parsed.username && <h3>List of playdates for {userLocalStorage_parsed.username}'s dog</h3>}
        {!userLocalStorage_parsed.username && <h3>To see a list of your dogs Playdates, please log in</h3>}
       </>
    )
}