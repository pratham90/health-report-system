import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import { Doctors, Home, About, Services, News,Contact,Appointment } from "./components";
import './App.css'


function App() {
  return (
    
      <Routes >
        {/* Signup Page as Home Page */}
        <Route path="/" element={<Signup />} />
        {/* Home Page Route */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/news" element={<News />} />
        <Route path="/Doctors" element={<Doctors/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
        
      </Routes>
  
  );
}

export default App;
