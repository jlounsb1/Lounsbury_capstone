import { useState } from 'react'
import './App.css'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import cors from 'cors'

function App() {

  return (
      <div>
        <h1>Intro Page</h1>
        <Router>
          <Routes>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
