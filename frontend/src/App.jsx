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
  const[email, setEmail] =useState()
  const [dogName, setDogName] = useState()
  const [age, setAge] = useState()
 
  const navigate = useNavigate()




  //login function
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:3000/login`, {username, password, loggedIn, dogName, age} )
        .then(result => {
          // if(user){
                navigate(`/`)
          // } else(window.alert(`Please try again`))
        })
        .catch(err=>console.log(err))
        
      }
   
    //signup function
    const handleRegister = async (e) => {
      e.preventDefault()
      try{
        await axios({
          url: 'http://localhost:3000/register',
          method:"POST", 
          data: {username, email, password, dogName, age:Number(age)}
        }).then(result =>{navigate('/login')})
      }catch(error){
        console.log(error)
      }
    }

    const[dogOne, setDogOne]=useState()
    const[dogTwo, setDogTwo]=useState()
    const[playDate, setPlayDate]=useState()
    //Create playdate function
    const handlePlayDate = async (e) => {
      e.preventDefault()
      try{
        await axios({
          url: 'http://localhost:3000/playdates/createplaydate/:id',
          method:"POST", 
          data: {dogOne, dogTwo, playDate}
        }).then(result =>{navigate('/playdates')})
      }catch(error) {
        console.log(error)
      }
    }

    

    //placing user input into local storage, so I can access it globally
      let userLocalStorage = {
        username:username,
        password:password,
        email:email,
        dogName:dogName,
        age:age,
        loggedIn:loggedIn
      }
      let userLocalStorage_serialized = JSON.stringify(userLocalStorage)
      localStorage.setItem("userLocalStorage", userLocalStorage_serialized)
      let userLocalStorage_parsed = JSON.parse(localStorage.getItem('userLocalStorage'))
      
    
  return (
      <div className="App">
        <Nav />
          <Routes>
            <Route path='/register' element={<Signup 
            handleRegister={handleRegister} 
              username={username} 
              password={password} 
              email={email}
              dogName = {dogName}
              age={age}
              setUserName={setUserName}
              setPassword={setPassword}
              setEmail={setEmail}
              setDogName={setDogName}
              setAge={setAge}
              />}></Route>
            <Route path='/login' element={<Login 
              handleSubmit={handleSubmit} 
              username={username} 
              password={password} 
              loggedIn={loggedIn} 
              dogName = {dogName}
              age={age}
              setUserName={setUserName}
              setPassword={setPassword}
              setLoggedIn={setLoggedIn}
              setDogName={setDogName}
              setAge={setAge}
            />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/dogs' element={<Dogs 
            />}></Route>
            <Route path='/playdates' element={<PlayDates 
              dogOne={dogOne}
              dogTwo={dogTwo}
            />}></Route>
            <Route path='/playdates/CreatePlayDate/:id' element={<CreatePlayDate 
              handlePlayDate={handlePlayDate} 
              dogOne={dogOne}
              dogTwo={dogTwo}
              playDate={playDate}
              setDogOne={setDogOne}
              setDogTwo={setDogTwo}
              setPlayDate={setPlayDate}
            />}></Route>
          </Routes>
        <Footer />
      </div>
  )
}

export default App
