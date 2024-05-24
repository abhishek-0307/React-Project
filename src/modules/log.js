import React, { useContext, useEffect, useState } from 'react'
import "../App.css" 
import { Button, Input } from '@mui/material'
import {  json, useNavigate } from 'react-router-dom'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateEmail } from 'firebase/auth';
import { app } from './firebase';
import { userstore } from '../App';

function Log() {

  const user=useContext(userstore);
  const [email,getem]=useState("");
  const [pass,getpw]=useState("");
const [userid,getuid]=useState("");
const [data,getdata]=useState([]);
  const auth=getAuth(app);
  const db=getDatabase(app);
  
  const referencefake=ref(db,`/dummy`);
   // const val=useNavigate();
    const val1=useNavigate();
    const loogedinuser=localStorage.getItem("data");
  useEffect(()=>
  {
    if(loogedinuser)
    {
    val1("/feed")
    }




    // onValue(referencefake,(v)=>
    // {
    //   getdata(v.val());

    // })

    // if(user)
    // {
    //   console.log(user);
    //    getuid(user.uid)
    // }

    onAuthStateChanged(auth,(v)=>{
      if(v){

      console.log(v.uid);
      getuid(v.uid)
      }
    })

  },[])

  // console.log(data.Email);
  
    const Signup=()=>{
        val1("/reg")
    }
    const Feedup=()=>{
      var updateemail="";
      console.log(email+"email");
      console.log(pass+"pass");
      if(!isNaN(Number(email)))
      {
        console.log("enter")
        updateemail=email+"@gmail.com";

      }
      else
      {
        console.log("exit");
        updateemail=email;
      }

    
      signInWithEmailAndPassword(auth,updateemail,pass).then((v)=>
      {
        console.log(v);
       // const data=JSON.parse(localStorage.getItem("data"))

        //set(ref(db,`/users/${userid}`),data).then(()=>console.log("success"));
        localStorage.setItem("data",updateemail);

       
        
        


        val1("/feed");
      }).catch(()=>{
        console.log("eeror")
      })
        
    }
      const em=(v)=>
      {
        getem(v.target.value);


      } 
    const pw=(v)=>
      {
        getpw(v.target.value);
      } 
  return (
    <>
      <div style={{backgroundColor:"black"}}>

        <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"20px",backgroundColor:"black"}}>
        <div style={{marginLeft:"100px"}}>
        
        <img src='https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/c9/87/6b/c9876b2e-99d7-2e30-b8e4-298a1ed132ab/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg' style={{height:"400px",width:"400px",borderRadius:"100%",marginTop:"100px"}}></img>

        </div>
        
      
        <div className='App' style={{marginTop:"100px",marginLeft:"100px"}}>
        <h1 className='h1reg'>Login</h1><br/>
        <Input placeholder='Enter Email' onChange={em} className='regbgc'/><br/><br/>
        <Input placeholder='Enter Password' onChange={pw} className='regbgc'/><br/><br/>
        <Button variant="contained" onClick={Feedup}>Login</Button><br/><br/>
        <p style={{color:"white"}}>Don't have Account</p>
        <Button variant="contained" onClick={Signup}>Sign Up</Button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Log