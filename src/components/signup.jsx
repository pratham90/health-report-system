import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import signImg from '../assets/signup img.png'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"
// import { faEnvelope,faHippo,faGoogle,faTwitter,faFacebookF } from '@fortawesome/free-solid-svg-icons'

const signup = () => {
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

      <div className='text-amber-50 bg-[#767CE3] h-212 sm:h-screen  sm:w-screen flex flex-col justify-center items-center w-screen  '>

        <div className=' w-[95%]  lg:w-[80%] px-10 flex flex-col sm:flex-row justify-center h-140 items-center my-13.5 sm:p-15 border-transparent rounded-2xl bg-[#3237A7] gap-2 '>
          <div className="log sm:hidden">
            <div className="log h-10 w-10 bg-blue-500 rounded-[50%] border-transparent">
              <img className='border-transparent rounded-4xl' src={logo} alt="" />
            </div>
          </div>
          <div className="left hidden sm:flex justify-centeritems-start flex-col  w-[50%] h-100 gap-4">

            <h1 className=''>MediTrack</h1>
            <div className=' w-100  flex justify-center items-center'>
              <img className=' w-60 h-60' src={signImg} alt="" />
            </div>
            <div>
              <p className=' px-10  '>Dicover the power of the personalized health </p>
              <p className='px-9'>insights and seamless tracking with MediTrack.</p>
            </div>
          </div>

          <div className="right sm:w-[40%] flex flex-col sm:h-110 justify-center items-center p-8 border-transparent bg-amber-50 rounded-xl ">
            <h1 className='text-blue-700 font-bold text-3xl' >Log In</h1>
            <div className='flex justify-center items-center flex-col my-10 gap-3  max-w-full'>
              <input className="text-gray-600 border-1 p-1.5 text-sm rounded-sm w-55 sm:w-70" type="email" name="" id="mail" placeholder='Email address' />
              <input className="text-gray-600 border-1 p-1.5 text-sm rounded-sm w-55 sm:w-70 " type="password" name="" id="pss" placeholder='Password' />
              <div className='flex justify-start gap-1 w-70 items-center pl-8 sm:pl-0'>
                <input type="checkbox" name="" id="" onClick={myfunction} /><span className='text-gray-500 text-sm'>Show Password</span>
              </div>
              <Link to="/home"> <button className='cursor-pointer bg-green-600 p-1.5 border-transparent rounded-sm w-55 sm:w-70'>Log in</button>
              </Link>
              <div className='flex justify-between text-left px=10 items-start'>
                <p ><a className=' text-xs text-blue-400 sm:text-sm' href="#">Forgotten Password</a></p>
              </div>
            </div>
            <p className='text-gray-500 text-xs'> or log in with</p>
            <div className=' text-gray-600 flex justify-center items-center gap-2'>
              <h1>faa</h1>
              <h1>faa</h1>
              <h1>faa</h1>


            </div>
            <h1><a className=' text-sm text-blue-400' href="#"> Need an account?Sign Up</a></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default signup
