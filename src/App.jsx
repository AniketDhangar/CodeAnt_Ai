import { useState } from 'react'
import './App.css'
 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
// import RightAuth from './Auth/RightAuth'

function App() {

  return (
    <>
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
         <Routes>
             <Route path={'/'} Component={Auth} />
             <Route path={'/dashboard'} Component={Home} />
             {/* <Route path={'/auth'} Component={RightAuth} /> */}
         </Routes>
     </div>
    </BrowserRouter>
    </>
  )
}

export default App
