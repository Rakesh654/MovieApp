import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [signUppage, setsignUppage] = useState(false);

  return (
    <div>
      <Header/>
      <div>
      <img className='absolute' alt='loading' src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
      </div>
      <div className='absolute bg-black bg-opacity-80 mx-auto right-0 left-0 w-4/12 pb-10 my-[15%] rounded-lg'>
        <h1 className='font-bold text-white p-2 mx-8 mt-10 text-3xl'>Sign {signUppage ? "Up" : "In"}</h1>
        <form>
          {signUppage ? <input type='text' className='w-10/12 p-3 mx-8 my-5 border border-black  border-b-2 bg-gray-700 rounded-md border-b-orange-900' placeholder='Full Name'/> : ""}
          <input type='text' className='w-10/12 p-3 mx-8 my-5 border border-black  border-b-2 bg-gray-700 rounded-md border-b-orange-900' placeholder='Email Address'/>
          <input type='text' className='w-10/12 p-3 mx-8 my-5 border border-black border-b-2 bg-gray-700 rounded-md border-b-orange-900' placeholder='Password'/>
          <button className='w-10/12 text-white text-lg p-3 mx-8 my-6 mb-15 bg-red-700 rounded-md'>Sign {signUppage ? "Up" : "In"}</button>
        </form>
        {
          !signUppage ? <p className='text-gray-400 mx-8'>New to Netflix? <span className='text-white hover:cursor-pointer hover:cursor-pointer hover:underline' onClick={() => setsignUppage(true) }>Sign up now</span></p> : <p className='text-gray-400 mx-8 '>Already have an account? <span className='text-white hover:cursor-pointer hover:underline' onClick={() => setsignUppage(false) }>Sign In now</span></p>
        }
        
       
      </div>
    </div>
  )
}

export default Login;