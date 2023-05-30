import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter , Route, Routes} from 'react-router-dom';


import React from "react";
import SignupForm  from "./components/signup/SignUp";
import LoginForm from "./components/login/Login";
import ExerciseForm from './components/ActivityForm/ActivityForm';
import HomePage from './HomePage';

function App() {


  return (
    <div className='App'>
    <BrowserRouter>
    <div className='pages'>
    <Routes>
     
    <Route path ='/'  element= {<HomePage/>}></Route> 
      <Route path ='/login'  element= {<LoginForm/>}></Route>  
      <Route path ='/signup'  element= {<SignupForm/>}></Route>
      <Route path ='/addactivity'  element= {<ExerciseForm/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
     
    </div>
    
      
    
  )
}

export default App
