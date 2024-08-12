import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Dogs from './components/Dogs'
import PlayDates from './components/PlayDates'
import CreatePlayDate from './components/CreatePlayDate'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function App(props) {
  const [username, setUserName] =useState()
  const [password, setPassword] =useState()
  const [loggedIn, setLoggedIn] =useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:3000/login`, {username, password, loggedIn} )
        .then(result => {
            console.log(result)
                navigate(`/${username}`)
            console.log(loggedIn)
        })
        .catch(err=>console.log(err))
        
      }
    //trying to set local storage, so i can pass it to other components
      let userLocalStorage = {
        username:username,
        password:password,
        loggedIn:loggedIn
      }
      let userLocalStorage_serialized = JSON.stringify(userLocalStorage)
      localStorage.setItem("userLocalStorage", userLocalStorage_serialized)
      let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
      console.log(userLocalStorage_parsed)
    
  return (
      <div className="App">
        <Nav />
          <Routes>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login 
              handleSubmit={handleSubmit} 
              username={username} 
              password={password} 
              loggedIn={loggedIn} 
              setUserName={setUserName}
              setPassword={setPassword}
              setLoggedIn={setLoggedIn}
            />}></Route>
            <Route path='/' element={<Home 
              loggedIn={loggedIn}
            />}></Route>
            <Route path='/:id' element={<Home />}></Route>
            <Route path='/dogs' element={<Dogs />}></Route>
            <Route path='/dogs/:id' element={<Dogs />}></Route>
            <Route path='/playdates' element={<PlayDates />}></Route>
            <Route path='/playdates/:id' element={<PlayDates />}></Route>
            <Route path='/playdates/:id/CreatePlayDate/:secondid' element={<CreatePlayDate />}></Route>
          </Routes>
        <Footer />
      </div>
  )
}

export default App
