import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Doctors, Home, About, Services, News,Contact,Appointment,Signup } from "./components";
import { AuthProvider } from "./components/AuthContext";
import './App.css'


function App() {
  return (
    <AuthProvider>
      <Routes  >
        {/* Signup Page as Home Page */}
        {/* <Route path="/" element={<Signup />} /> */}
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/news" element={<News />} />
        <Route path="/Doctors" element={<Doctors/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
      </AuthProvider>
      
  );
}

export default App;
