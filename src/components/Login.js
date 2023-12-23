import React, { useRef } from 'react'
import Header from './Header';
import { useState } from 'react';
import { validData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUppage, setsignUppage] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);
  const handleError = () =>{
       const errorMessage = validData(email.current.value, password.current.value, name?.current?.value);
       setError(errorMessage);

       if(errorMessage) return;

       if(signUppage){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
              // Signed up 
              // const user = userCredential.user;
              // update Display name 
              updateProfile(auth.currentUser, {
                displayName: name.current.value
              }).then(() => {
                const {uid, displayName, email} = auth.currentUser;
                dispatch(addUser({uid: uid, displayName: displayName, email: email}))
              }).catch((error) => {
                // An error occurred
                // ...
              });
              // End

              navigate('/browse');
              // ...
              })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode + "-" + errorMessage);
            // ..
          });
       }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          navigate('/browse');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
       }
  }

  return (
    <div>
      <Header/>
      <div>
      <img className='absolute' alt='loading' src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
      </div>
      <div className='absolute bg-black bg-opacity-80 mx-auto right-0 left-0 w-3/12 pb-10 my-[15%] rounded-lg'>
        <h1 className='font-bold text-white p-2 mx-8 mt-10 text-3xl'>Sign {signUppage ? "Up" : "In"}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {signUppage ? <input type='text' ref={name} className='w-10/12 p-3 text-white mx-8 my-5 border border-black  border-b-2 bg-gray-700 rounded-md border-b-orange-900' placeholder='Full Name'/> : ""}
          <input type='text' ref={email} className='w-10/12 p-3 mx-8 text-white my-5 border border-black  border-b-2 bg-gray-700 rounded-md border-b-orange-900' placeholder='Email Address'/>
          <input type='password' ref={password} className='w-10/12 p-3 text-white mx-8 my-5 border border-black border-b-2 bg-gray-700 rounded-md border-b-orange-900' placeholder='Password'/>
          <p className='text-red-900 mx-8 font-semibold'>{error}</p>
          <button className='w-10/12 text-white text-lg p-3 mx-8 my-6 mb-15 bg-red-700 rounded-md' onClick={handleError}>Sign {signUppage ? "Up" : "In"}</button>
        </form>
        {
          !signUppage ? <p className='text-gray-400 mx-8'>New to Netflix? <span className='text-white hover:cursor-pointer hover:cursor-pointer hover:underline' onClick={() => setsignUppage(true) }>Sign up now</span></p> : <p className='text-gray-400 mx-8 '>Already have an account? <span className='text-white hover:cursor-pointer hover:underline' onClick={() => setsignUppage(false) }>Sign In now</span></p>
        }
        
       
      </div>
    </div>
  )
}

export default Login;