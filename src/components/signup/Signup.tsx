import React from 'react'
// import 'Signup.css'

import SignupLeft from './SignupLeft'
import SignupRight from './SignupRight'
const Signup : React.FC=()=> {
  return (
    <div className="lg:h-screen lg:w-screen flex items-center justify-center flex-row bg-white">
    <div className='w-9/12 h-[87.5%] flex flex-row '>

   <SignupLeft  />
   <SignupRight />
    </div>
    </div>
  )
}
export default Signup;