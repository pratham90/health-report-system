import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  FaGoogle } from "react-icons/fa6";
import { FaFacebook,FaTwitter } from "react-icons/fa";
import signImg from '../assets/signup img.png'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
// import { faEnvelope,faHippo,faGoogle,faTwitter,faFacebookF } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "./AuthContext"; // Import AuthContext

const signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
      useGSAP(()=>{
          gsap.from(".left",{
              x:-500,
              duration:1,
              opacity:0,
              delay:2,
              
          }
          )
          gsap.from(".box-left", {
            x: -1500,  // Move from -1000px on x-axis
            duration: 1,  // Animation lasts 1 second
            // opacity: 0,  // (Optional) Fade in effect
            delay: 1.5  // Delay before animation starts
          });
          gsap.from(".box-right", {
            x: 1500,  // Move from -1000px on x-axis
            duration: 1,  // Animation lasts 1 second
            // opacity: 0,  // (Optional) Fade in effect
            delay: 1  // Delay before animation starts
          });
          gsap.from(".box-item", {
            x: 1500,  // Move from -1000px on x-axis
            duration: 1,  // Animation lasts 1 second
            // opacity: 0,  // (Optional) Fade in effect
            delay: 1.8,  // Delay before animation starts
          });
          
          gsap.from(".box",{
            y:500,
            duration:1.5,
            opacity:0,
              
          }
          )
      })
  const { setIsLoggedIn } = useAuth();
   const isSignUp = location.pathname === "/Signup";

  function myfunction() {
    let x = document.getElementById("pss");
    if (x.type === "password") {
      x.type = "text";
    }

    else {
      x.type = "password";
    }
  }
  return (
    <>

<div className="text-white bg-gradient-to-b from-[#badcbb] to-[#88d491] min-h-screen flex justify-center items-center w-full px-4 sm:px-8 lg:px-20">
  {/* Container */}
  <div className="flex flex-wrap sm:flex-nowrap justify-center items-center w-full max-w-5xl overflow-hidden">

    {/* Left Box */}
    <div className="box-right w-full sm:w-[50%] relative px-6 sm:px-10 flex flex-col sm:flex-row justify-start items-center h-auto sm:h-140 my-6 sm:p-8 rounded-tl-2xl rounded-bl-2xl bg-[#257343] gap-4 shadow-[5px_0px_20px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Logo */}
      {/* <div className="log sm:hidden">
        <div className="h-10 w-10 rounded-full border-transparent">
          <img className="border-transparent rounded-4xl" src={logo} alt="Logo" />
        </div>
      </div> */}
      {/* Text Content */}
      <div className="left hidden sm:flex flex-col w-full sm:w-[100%]  h-auto sm:h-100 gap-10 justify-between font-bold text-center sm:text-left">
        <h1>MediTrack</h1>
        <div className="w-full h-auto flex justify-center items-center">
          <p>Here for you always</p>
        </div>
        <div className='flex flex-col items-center justify-between pl-5 text-center'>
          <p className='w-100'>Discover the power of personalized health</p>
          <p className='w-100'>insights and seamless tracking with MediTrack.</p>
        </div>
      </div>
    </div>

    {/* Right Box */}
    <div className="box-left w-full sm:w-[50%] relative px-6 sm:px-10 py-15 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl md:rounded-tl-none md:rounded-bl-none flex flex-col justify-center items-center h-auto sm:h-140 my-6 sm:p-8 lg:rounded-tr-2xl lg:rounded-br-2xl bg-[#257343] gap-4 shadow-[6px_6px_10px_-2px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Form Box */}
      <div className="box-item right w-full max-w-xs sm:w-[80%] flex flex-col justify-center items-center p-6 sm:p-8 bg-gray-50 shadow-lg rounded-xl">
        <h1 className="text-emerald-500 drop-shadow-xl font-bold text-2xl sm:text-3xl">{isSignUp ? "Sign Up" : "Log in"}</h1>

        {/* Form Fields */}
        <div className="flex flex-col my-6 gap-3 w-full">
          <input className="text-gray-600 border p-2 text-sm rounded-sm w-full" type="email" placeholder="Email address" />
          <input className="text-gray-600 border p-2 text-sm rounded-sm w-full" type="password" placeholder="Password" />
          <div className="flex items-center gap-2">
            <input type="checkbox" onClick={myfunction} />
            <span className="text-gray-500 text-sm">Show Password</span>
          </div>
          <Link to="/home">
            <button className="cursor-pointer bg-green-600 p-2 border-transparent rounded-sm w-full text-white font-semibold" onClick={() => setIsLoggedIn(true)}>
              {isSignUp ? "Sign Up" : "Log in"}
            </button>
          </Link>
          <p className="text-xs text-blue-400">{!isSignUp && <a href="#">Forgotten password?</a>}</p>
        </div>

        {/* Social Login */}
        <p className="text-gray-700 text-xs">Or log in with</p>
        <div className="flex gap-3 text-gray-700 text-xl">
          <FaGoogle />
          <FaFacebook />
          <FaTwitter />
        </div>

        {/* Sign-Up Link */}
        {!isSignUp && (
          <h1 className="text-sm text-blue-400">
            <a href="#" onClick={() => navigate("/Signup")}>Need an account? Sign Up</a>
          </h1>
        )}
      </div>
    </div>

  </div>
</div>

    </>
  )
}

export default signup
