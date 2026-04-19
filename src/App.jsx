import { useState } from 'react'

import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import Layout from './components/Navbar/Layout'
//import BasicExample from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import { div } from 'three/tsl'




function App() {
  
return(

    <div className='div'>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
)
  
}

export default App
