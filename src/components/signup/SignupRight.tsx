import { TextField, InputAdornment } from '@mui/material'
import React from 'react'


const SignupRight = () => {
  return (
    <div className='bg-white w-[60%] lg:h-full p-8'>
      <div className='leading-6 mx-auto w-[85%] '>
        <h1 className='text-black text-lg lg:font-bold py-4 '>Sign up to <span className='text-[#8F0A0A]'>FlairFiner</span>
        </h1>
        <span className='text-[#D9D9D9]'>Create your account</span>
      </div>
      <div className='mx-auto w-[85%] pt-3 flex flex-col justify-evenly h-[65%]'>
        <div className="w-full h-fit relative flex items-end ">
          <input className='outline-none p-3 bg-[#F6F6F6] mb-6 w-[85%] pl-4 text-sm  h-[60px] focus:bg-[white] focus:border-2' type="text" placeholder='Full Names' required />

        </div>
        <input className='outline-none p-3 bg-[#F6F6F6] mb-6 w-[85%] pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2' type="text" placeholder='Email Address' required />

        <input className='outline-none p-3 bg-[#F6F6F6] mb-6 w-[85%] pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2' type="text" placeholder='Password' required />
        <div className='w-full h-fit flex flex-col justify-center mb-6'>

          <input className='outline-none p-3 mb-2 bg-[#F7F7F7] w-[85%] pl-4 text-sm h-[60px] focus:bg-[white] focus:border-2' type="text" placeholder='Confirm password' required />
          <section className='text-[#D9D9D9] w-[85%] self-center'>I accept the <span className='text-[#8F0A0A]'> terms and conditions </span>and <span className='text-[#8F0A0A]'>User agreement</span></section>
        </div>
        <div className=''>

          <button className='w-[85%] h-[70px] outline-none p-3 bg-[#8F0A0A] text-[white] text-center border-0 rounded-none  '>
            Sign up
          </button>
        </div>
      </div>
        <div className='w-[85%] mx-auto flex justify-center inset-x-0 h-[35%]'>
          <div className='w-full flex justify-end'>

          <section className='w-[85%] self-center'>Already have an account? <a href="#" className='text-[#8F0A0A]'>Login instead</a></section>
          </div>
        </div>
    </div>
  )
}
export default SignupRight