import React from 'react'
import { Route,Routes } from 'react-router-dom';

import './App.css';
import Onboarding from './Pages/onboarding';
import Login from './Pages/login'
import Signup from './Pages/signup'
import Cookies from './Pages/cookiesinfo'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cookies' element={<Cookies/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
