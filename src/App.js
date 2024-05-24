import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Frst from './Frst';
import Create from './modules/create';
import { createContext, useEffect, useState } from 'react';
import { getApp } from 'firebase/app';
import { app } from './modules/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import OtpChecking from './modules/api testing/otp';
export const userstore=createContext(null);
function App() {
const [user,setuser]=useState(null);



const auth=getAuth(app);
useEffect(()=>
{
 const unsubscribe= onAuthStateChanged(auth,(u)=>
{
  setuser(u);


})
return () => unsubscribe();

},[auth])


  return (
    <>
    <userstore.Provider  value={user}>
      <Frst/>
    </userstore.Provider>
    {/* <Create/> */}
    {/* <OtpChecking/> */}
    </>
  );
}

export default App;
