import React from 'react'
import { Route,Routes } from 'react-router-dom';

import './App.css';
import Onboarding from './Pages/onboarding';
import Login from './Pages/login'
import Signup from './Pages/signup'
import Cookies from './Pages/cookiesinfo'
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile'
import Pv from './Pages/Pv'
import Task from './Pages/Task'
import Messages from './Pages/Messages'
import TargetsBoard from './Pages/TargetsBoard'
import Tutorials from './Pages/Tutorials'
import Help from './Pages/Help'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cookies' element={<Cookies/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/pv' element={<Pv/>}/>
        <Route path='/tasks' element={<Task/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/targetsboard' element={<TargetsBoard/>}/>
        <Route path='/tutorials' element={<Tutorials/>}/>
        <Route path='/help' element={<Help/>}/>







        
      </Routes>
      
    </div>
  );
}

export default App;
