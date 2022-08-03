import React from 'react'
import { Route,Routes } from 'react-router-dom';

import './App.css';
import Onboarding from './Pages/onboarding';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
