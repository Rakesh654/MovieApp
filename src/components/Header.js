import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_IMAGE_URL } from '../utils/constants';
import { toggleScreen } from '../utils/gptSlice';
import { LANGUAGE } from '../utils/configConstants';
import { changeLanguage } from '../utils/languageSlice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const gpt = useSelector(store => store.gpt.toggleview);
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

  const handleToggle = ()=>{
    dispatch(toggleScreen());
  }

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
     {user?.email != null ? <div className='flex p-2'>
          {gpt ? <select className='bg-gray-700 h-12 mr-2 rounded-md text-white' onChange={(e) => dispatch(changeLanguage(e.target.value))} > 
            {LANGUAGE.map(lang => (<option key={lang.identifier} value={lang.value}>{lang.value}</option>))}
           </select> : ""}
           <img className='w-12 h-12' src={USER_IMAGE_URL} alt='loading...'></img> 
           <button className='w-36 ml-1 opacity-100 rounded-md h-12 bg-orange-900 font-bold text-white' onClick={handleToggle}> {!gpt ? "GPT Search" : "Home Page"}</button>
          <button className='w-36 ml-1 opacity-100 rounded-md h-12 bg-red-700 font-bold text-white' onClick={logOut}>Sign Out</button>
      </div> : ""}
    </div>
  )
}

export default Header;