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

function App() {
  return (
      <div className="App">
        <Nav />
        
          <Routes>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home/:id' element={<Home />}>
              
            </Route>
            <Route path='/dogs' element={<Dogs />}></Route>
            <Route path='/playdates' element={<PlayDates />}></Route>
          </Routes>
        <Footer />
      </div>
  )
}

export default App
