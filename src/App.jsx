import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import { Doctors, Home, About, Services, News,Contact } from "./components";
import './App.css'


function App() {
  return (
    
      <Routes>
        {/* Signup Page as Home Page */}
        <Route path="/" element={<Signup />} />
        {/* Home Page Route */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/news" element={<News />} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
  
  );
}

export default App;
