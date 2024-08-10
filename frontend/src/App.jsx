import { useState } from 'react'
import './App.css'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
      <div>
        <Router>
          <Routes>
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
