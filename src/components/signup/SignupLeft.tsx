import React from 'react'
import './style/Signup.css'
import '../.././index.css'
const SignupLeft: React.FC= () => {
  return (
    <div className='text-white lg:flex flex-col signup-left w-[40%] justify-end p-6 hidden '>
        <h2 className='md py-2'>Great Choice!</h2>
        <span className='text-sm text-[rgba(255,255,255,0.66)] '>Thanks for choosing to join FlairFiner.<br />Create your account to start exploring and <br />sharing your talents </span>
    </div>
  )
}
export default SignupLeft