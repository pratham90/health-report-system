import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './navbar';
import Ani from "./CanvasImage"
import Sec from "./section"
import Footer from "./footer"

const Home = () => {
  return (
    <div>
      <Nav/>
  
  <Sec/>
  <Footer/>
    </div>
  )
}

export default Home
