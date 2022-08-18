import React from 'react'
import { Route,Routes } from 'react-router-dom';
import {useState} from 'react'
import './App.css';
import Onboarding from './Pages/onboarding';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Cookies from './Pages/cookiesinfo'
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile'
import Pv from './Pages/Pv'
import Task from './Pages/Task'
import Messages from './Pages/Messages'
import TargetsBoard from './Pages/TargetsBoard'
import Tutorials from './Pages/Tutorials'
import Help from './Pages/Help'
import AttendanceRegister from './Pages/AttendanceRegister'

function App() {
  const [currentLoggedUser,setCurrentLoggedUser] = useState('')


  useEffect(() => {
    fetch("https://zanbase-backend.herokuapp.com/auth")
    .then(res =>{
      if (res.ok){
        res.json().then(user => setCurrentLoggedUser(user))
      }
    })
    
  }, [])
  if(!currentLoggedUser) return <Login/>


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cookies' element={<Cookies/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/attendance-register' element={<AttendanceRegister/>}/>
        <Route path='/pv' element={<Pv/>}/>
        <Route path='/tasks' element={<Task/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/targets' element={<TargetsBoard/>}/>
        <Route path='/tutorials' element={<Tutorials/>}/>
        <Route path='/help' element={<Help/>}/>







        
      </Routes>
      
    </div>
  );
}

export default App;
