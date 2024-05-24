
import axios from 'axios';
import React, { useEffect, useMemo, useReducer, useState } from 'react'









function Create() {
  const[counter,Upcounter]=useState(1);

 const handleIncrement=()=>{
  Upcounter(counter+1);
 }

 const evenChecker=useMemo(()=>{
    return counter%2==0?"even":"odd"
 },[counter])
  
 const doubleCount=useMemo(()=>{
    return counter*2;
 },[counter])
  
  return (
    <>
    <div>create</div>
    <h4>{counter}:counter</h4>
    <h3>{evenChecker}</h3>
    <h5>{doubleCount}</h5>
    <button onClick={handleIncrement}>increment</button>
   
    
    
   
    </>
    

  )
}

export default Create