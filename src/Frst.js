import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Log from './modules/log'
import Reg from './modules/reg'
import Feed from './modules/feed'

function Frst() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Log/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Frst