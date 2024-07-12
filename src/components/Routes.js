import { Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Sign from '../pages/Sign'
import Candidate from '../pages/Candidate'
import { SignIn, SignUp } from '@clerk/clerk-react'



const Routing = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/sign-up' element={<Sign/>} ></Route>
          <Route path='/candidate/home' element={<Candidate/>} ></Route>
        </Routes>
      </div>
    )
  }
  
  export default Routing
