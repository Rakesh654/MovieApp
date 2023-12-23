import React, { useEffect } from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { auth } from '../utils/firebase';
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {

  const dispatch = useDispatch();
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        debugger
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName, email} = user;
        dispatch(addUser({uid: uid, displayName: displayName, email: email}));
  
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  
    const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    }
  ]) 
  return (
    <RouterProvider router={appRoute}/>
  )
}

export default Body;