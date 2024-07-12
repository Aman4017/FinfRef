import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import './login.css'

const Sign = () => {
  return (
    <div className='logBox'>
      <SignUp/>
    </div>
  )
}

export default Sign
