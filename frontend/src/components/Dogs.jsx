
import OtherDog from './OtherDog'
import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Dogs() {
    axios.get(`http://localhost:3000/dogs`)
    .then(result =>console.log(result))
    .catch(err =>console.log(err))
   //I can get the data to console, but I can't get it to return, and therefor be able to be mapped
    return (
        <>
       <div className="matchingChart">
       <div className="yourInfo">

       </div>
       <div className="otherDog">
            <OtherDog >
             
            </OtherDog>

       </div>
        </div>
        </>
    )
}