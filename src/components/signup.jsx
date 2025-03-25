import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  FaGoogle } from "react-icons/fa6";
import { FaFacebook,FaTwitter } from "react-icons/fa";
import signImg from '../assets/signup img.png'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"
import { useLocation, useNavigate } from "react-router-dom";
// import { faEnvelope,faHippo,faGoogle,faTwitter,faFacebookF } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "./AuthContext"; // Import AuthContext

const signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

      <div className='text-white bg-gradient-to-b from-[#badcbb] to-[#88d491] h-212 sm:h-screen  sm:w-screen flex flex-col justify-center items-center w-screen  '>

        <div className=' w-[95%]  lg:w-[80%] px-10 flex flex-col sm:flex-row justify-center h-140 items-center my-13.5 sm:p-15 border-transparent rounded-2xl   bg-[#257343] gap-2 shadow-[6px_10px_20px_rgba(0,0,0,0.4)] transition-all duration-300 '>
          <div className="log sm:hidden">
            <div className="log h-10 w-10  rounded-[50%] border-transparent">
              <img className='border-transparent rounded-4xl' src={logo} alt="" />
            </div>
          </div>
          <div className="left hidden sm:flex justify-centeritems-start flex-col  w-[50%] h-100 gap-4 font-bold">

            <h1 className=''>MediTrack</h1>
            <div className=' w-100 h-200 flex justify-center items-center'>
              <p>here for you always</p>
            </div>
            <div>
              <p className=' px-10  '>Dicover the power of the personalized health </p>
              <p className='px-9'>insights and seamless tracking with MediTrack.</p>
            </div>
          </div>

          <div className="right sm:w-[40%] flex flex-col sm:h-110 justify-center items-center p-8 border-transparent bg-gray-50  shadow-[6px_10px_20px_rgba(0,0,0,0.4)]  rounded-xl ">
            <h1 className='text-emerald-500 drop-shadow-xl font-bold text-3xl' >{isSignUp ? "Sign Up" : "Log in"}</h1>
            <div className='flex justify-center items-center flex-col my-10 gap-3  max-w-full'>
              <input className="text-gray-600 border-1 p-1.5 text-sm rounded-sm w-55 sm:w-70" type="email" name="" id="mail" placeholder='Email address' />
              <input className="text-gray-600 border-1 p-1.5 text-sm rounded-sm w-55 sm:w-70 " type="password" name="" id="pss" placeholder='Password' />
              <div className='flex justify-start gap-1 w-70 items-center pl-8 sm:pl-0'>
                <input type="checkbox" name="" id="" onClick={myfunction} /><span className='text-gray-500 text-sm'>Show Password</span>
              </div>
              <Link to="/home"> <button className='cursor-pointer bg-green-600 p-1.5 border-transparent rounded-sm w-55 sm:w-70'  onClick={() => setIsLoggedIn(true)} >{isSignUp ? "Sign Up" : "Log in"}</button>
              </Link>
              <div className='flex justify-between text-left px=10 items-start'>
                <p ><a className=' text-xs text-blue-400 sm:text-sm' href="#">{isSignUp ? "" : "forgotten password"}</a></p>
              </div>
            </div>
            <p className='text-gray-700 text-xs'> or log in with</p>
            <div className=' text-gray-700 flex justify-center items-center gap-2'>
              <h1><FaGoogle /></h1>
              <h1><FaFacebook /></h1>
              <h1><FaTwitter /></h1>


            </div>
            <h1><a className=' text-sm text-blue-400' href="#" onClick={() => navigate("/Signup")}> {isSignUp ? "" : "Need an account?Sign Up"}</a></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default signup
