import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom'

export default function PlayDates() {
    const params =useParams();
    const IUD =params.id

    return(
       <>
       <h3>List of playdates for your dog</h3>
      
       </>
    )
}