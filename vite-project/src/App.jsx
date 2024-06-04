import React from 'react'
import { BrowserRouter as Router, Routes, Route}
 from 'react-router-dom';
import Header from "./common/Header"
import Footer from "./common/Footer"
import Home from "./pages/Home"
import Features from "./pages/Features"
import Icon from './components/Icon';
import "../src/index.css"




const  App = () => {
  return (
    <>
     
    <div>
   
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/features' element={<Features/>}/> 


        </Routes>
       
        <Footer/>
      </Router>

    </div>
    
    </>
  )
}

export default App
