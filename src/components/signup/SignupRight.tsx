import React from 'react'


const SignupRight=()=>{
  return (
    <div className='bg-white w-[60%] lg:h-full p-8'>
      <div className='leading-6 mx-auto w-[85%] '>
        <h1 className='text-black text-lg lg:font-bold py-4 '>Sign up to <span className='text-[#8F0A0A]'>FlairFiner</span>
        </h1>
        <span className='text-[#D9D9D9]'>Create your account</span>
      </div>
      <div className='mx-auto w-[85%] pt-3'>
        <input className='outline-none p-3 bg-[#F6F6F6] mb-6 w-[85%] pl-4 text-sm  h-[50px] focus:bg-[white] focus:border-2' type="text" placeholder='Full Names' required />
        <input className='outline-none p-3 bg-[#F6F6F6] mb-6 w-[85%] pl-4 text-sm h-[50px] focus:bg-[white] focus:border-2' type="text" placeholder='Email Address' required />

        <input className='outline-none p-3 bg-[#F6F6F6] mb-6 w-[85%] pl-4 text-sm h-[50px] focus:bg-[white] focus:border-2' type="text" placeholder='Password' required />
        <input className='outline-none p-3 bg-[#F7F7F7] mb-6 w-[85%] pl-4 text-sm h-[50px] focus:bg-[white] focus:border-2' type="text" placeholder='Confirm password' required />
 
      </div>
    </div>
  )
}
export default SignupRight