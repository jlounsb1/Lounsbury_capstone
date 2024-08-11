
import OtherDog from './OtherDog'
import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Dogs() {

   //I can get the data to console, but I can't get it to return, and therefor be able to be mapped
    return (
        <>
       <div className="matchingChart">
       <div className="yourInfo">
        <h3>Your dogs info</h3>
       </div>
       <div className="otherDog">
        <h3>Other Dogs To play with:</h3>
            <OtherDog />
       </div>
        </div>
        </>
    )
}