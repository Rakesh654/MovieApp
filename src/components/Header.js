import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const logOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute  bg-gradient-to-b from-black z-10 flex justify-between'>
        <div className='w-9/12'>
            <img alt='loading..' className='w-2/12'  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
        </div>
     {user?.email != null ? <div className='w-1/12'>
          <button className='border border-solid w-12/12 m-3 p-3 bg-red-700 text-white' onClick={logOut}>Sign Out</button>
      </div> : ""}
    </div>
  )
}

export default Header;