import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_IMAGE_URL } from '../utils/constants';

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName, email} = user;
        dispatch(addUser({uid: uid, displayName: displayName, email: email}));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    // Unsubscribe when the component in unmount
    return () => unsubscribe();
  }, []);

  const logOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute  bg-gradient-to-b from-black z-10 flex justify-between'>
        <div className='w-9/12'>
            <img alt='loading..' className='w-2/12'  src={LOGO_URL}></img>
        </div>
     {user?.email != null ? <div className='w-2/12 flex justify-evenly'>
           <img className='h-[50px] ml-20 mt-3' src={USER_IMAGE_URL} alt='loading...'></img> 
          <button className=' w-12/12 m-3 p-3 bg-red-700 text-white' onClick={logOut}>Sign Out</button>
      </div> : ""}
    </div>
  )
}

export default Header;